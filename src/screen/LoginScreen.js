import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Madoka} from 'react-native-textinput-effects';
import { useNavigation } from '@react-navigation/native';
import app from '../../App';

const Stack = createNativeStackNavigator();

//Defino las rutas para la navegacion por rutas.
export default function logInScreen() {
  const navigation = useNavigation();
return(
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
          onPress={() => navigation.navigate("home")}
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
    </ImageBackground>
  </View>
);
}

const styles = StyleSheet.create({
  image: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
