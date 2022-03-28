import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Madoka} from 'react-native-textinput-effects';
import {useNavigation} from '@react-navigation/native';
import app from '../../App';
import MapView from 'react-native-maps';

const Stack = createNativeStackNavigator();

//Defino las rutas para la navegacion por rutas.
export default function UbicacionScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          top: '-10%',
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
          <MapView 
          initialRegion={{
            latitude: 37.78825, 
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          />
            </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
