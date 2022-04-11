import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {Madoka} from 'react-native-textinput-effects';
import {useNavigation} from '@react-navigation/native';
import app from '../../App';
import {  } from './logInScreen'; '../screen/LoginScreen.js'

const Stack = createNativeStackNavigator();

//Defino las rutas para la navegacion por rutas.
export default function UbicacionScreen({navigation, route}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
      }}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          color: '#cb997e',
        }}>
        Ubicación
      </Text>
      <Card
        containerStyle={{
          backgroundColor: 'white',
          borderRadius: 15,
          elevation: 10,
          width: '80%',
          height: '50%',
          shadowColor: 'black'
        }}>
          <Image source={{uri:'https://s1.cdn.autoevolution.com/images/news/gallery/google-maps-suddenly-becomes-painfully-slow-on-some-android-phones_1.jpg'}}/>
            </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
