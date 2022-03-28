import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Madoka} from 'react-native-textinput-effects';
import {useNavigation} from '@react-navigation/native';
import app from '../../App';
import baseURL from '../routes/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

var token;
//Defino las rutas para la navegacion por rutas.
export default function logInScreen() {
  const navigation = useNavigation();
  const url = '/api/sanctum/token';

  const token = async (direccion, contrasenia) => {
    try {
      const res = await fetch(baseURL + url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: direccion,
          password: contrasenia,
        }),
      })
        .then(res => res.json())
        .catch(error => console.log('Error: ' + error))
        .then(response => {
          console.log('Success: ' + response['token']);
          saveData(response['token'])
        });
    } catch (error) {
      console.log(error);
    }
  };

  const saveData = async(token)=>{
    try{
      AsyncStorage.setItem(
        'token',
        JSON.stringify({
          token: token
        })
      );
      console.log("hecho")
    }catch(error){
      console.log(error)
    }
  }
  
  const getToken = async () =>{
    try{
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue != null ? JSON.parse(jsonValue): null
    }catch(e){
      console.log(e)
    }
  }

  const [name, setname] = useState('');
  const [pass, setpass] = useState('');
  return (
    
    <View style={{flex: 1, width: '100%'}}>
      <ImageBackground
        source={require('../../assets/img/background_main2.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={{top: '-10%', fontSize: 35, fontWeight: 'bold'}}>
          Mad Men
        </Text>
        <Card
          containerStyle={{
            backgroundColor: 'rgba(255,255,255,1',
            borderRadius: 15,
            elevation: 10,
          }}>
          <Card.Title style={{fontSize: 20, color: 'white'}}>
            Iniciar Sesión
          </Card.Title>

          <Madoka
            label="E-mail"
            borderColor="white"
            inputPadding={16}
            labelHeight={24}
            labelStyle={{color: 'white', fontSize: 15}}
            inputStyle={{
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 15,
            }}
            onChangeText={text => setname(text)}
            value={name}
          />

          <Madoka
            label="Password"
            borderColor="white"
            inputPadding={16}
            labelHeight={24}
            labelStyle={{color: 'white', fontSize: 15}}
            inputStyle={{
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 15,
            }}
            onChangeText={password => setpass(password)}
            value={pass}
            secureTextEntry={true}
          />

          <Button
            type="outline"
            title={'Iniciar sesión'}
            titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 25}}
            buttonStyle={{
              borderRadius: 15,
              width: 300,
              borderColor: 'white',
            }}
            onPress={() => token(name, pass)}
          />

          <Button
            type="clear"
            title={'Registrarse'}
            titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 18}}
            buttonStyle={{
              marginVertical: 10,
              borderRadius: 15,
              width: 300,
              borderColor: 'white',
            }}
            onPress={()=>getToken().then(token =>{console.log(token)})}
          />
        </Card>
        <View style={{top: 10, flexDirection: 'row'}}>
          <Icon
            name="facebook-official"
            size={30}
            color={'white'}
            style={{marginHorizontal: 10}}
          />
          <Icon
            name="instagram"
            size={30}
            color={'white'}
            style={{marginHorizontal: 10}}
          />
          <Icon
            name="twitter"
            size={30}
            color={'white'}
            style={{marginHorizontal: 10}}
          />
          <Icon
            name="youtube-play"
            size={30}
            color={'white'}
            style={{marginHorizontal: 10}}
          />
        </View>
        {AsyncStorage.getItem('token')!=null && navigation.navigate("home")}
        {AsyncStorage.getItem('token')==null && navigation.navigate("login")}
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
