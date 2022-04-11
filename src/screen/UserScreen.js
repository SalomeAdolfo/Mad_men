import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-elements';

export default function UsuarioScreen(route, navigation) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
            <Text style={{...styles.text_title}}>User</Text>
            
    </View>
  );
}
const styles = StyleSheet.create({
    text_title:{
        color:'black',
        fontSize:50,
        fontWeight: '100'
    }
});
