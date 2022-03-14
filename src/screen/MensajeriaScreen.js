import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Madoka} from 'react-native-textinput-effects';
import {useNavigation} from '@react-navigation/native';
import { ListItem, Avatar } from 'react-native-elements';

//Defino las rutas para la navegacion por rutas.

const list = [
    {
      name: 'Messi',
      avatar_url: 'https://1.bp.blogspot.com/-OUebPguwgA0/XYiWweITVOI/AAAAAAAAAxQ/jTufpkAV90QvGHKWSNsXBaJ7ji9qQ7hlwCEwYBhgL/s1600/h901xxccv6831.jpg',
      subtitle: 'Psicología clínica'
    },
    {
      name: 'Chayane chiquito',
      avatar_url: 'https://th.bing.com/th/id/OIP.dpVRFme7QRaHLXvclLY46AHaHa?pid=ImgDet&rs=1',
      subtitle: 'Psicología educativa'
    },
    {
        name: 'Andrew Garfield',
        avatar_url: 'https://th.bing.com/th/id/R.f9cd739664d097c6ca62acf1192eaab6?rik=aQR3kaebmc8Bug&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fmUzapkiUn2kp17yedwoeAa2rK8C.jpg&ehk=Xy1B1YvuAoQGAZbjGdAYZwqWSqqaCMnY9P6vSIt5WDI%3d&risl=&pid=ImgRaw&r=0',
        subtitle: 'Psicología organizacional'
    },
    {
        name: 'Messi',
        avatar_url: 'https://1.bp.blogspot.com/-OUebPguwgA0/XYiWweITVOI/AAAAAAAAAxQ/jTufpkAV90QvGHKWSNsXBaJ7ji9qQ7hlwCEwYBhgL/s1600/h901xxccv6831.jpg',
        subtitle: 'Psicología clínica'
      },
      {
        name: 'Messi',
        avatar_url: 'https://1.bp.blogspot.com/-OUebPguwgA0/XYiWweITVOI/AAAAAAAAAxQ/jTufpkAV90QvGHKWSNsXBaJ7ji9qQ7hlwCEwYBhgL/s1600/h901xxccv6831.jpg',
        subtitle: 'Psicología clínica'
      }
  ]

export default function UbicacionScreen() {

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
          top: '-18%',
          fontSize: 35,
          fontWeight: 'bold',
          color: '#cb997e',
        }}>
        Contactos
      </Text>

      
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider style={{backgroundColor: 'yellow', width: '80%', borderRadius: 25}}>
        <Avatar source={{uri: l.avatar_url}} size={50} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }


    </View>
  );
}
