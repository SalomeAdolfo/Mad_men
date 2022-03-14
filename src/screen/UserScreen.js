import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dashboard from 'react-native-dashboard';

//Defino las rutas para la navegacion por rutas.
const Icon = ({ icon, item, background }) => (
    <FontAwesome
        name={icon}
        size={40}
        color={
            item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
        }
        style={item.styleIcon}
    />
);

const data = [
    {
        name: 'Me',
        icon: (item, background) => Icon({ icon: 'user', item, background }),
        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
    {
        name: 'Family',
        icon: (item, background) => Icon({ icon: 'gratipay', item, background }),
        styleIcon: { color: '#0d47a1' },
    },
    {
        name: 'Lovely',
        icon: (item, background) => Icon({ icon: 'heart', item, background }),
    },
    {
        name: 'Team',
        icon: (item, background) => Icon({ icon: 'users', item, background }),
        styleName: { color: '#0d47a1', fontWeight: 'bold' },
    },
    {
        name: 'Friends',
        nameColor: '#3498db',
        icon: (item, background) => Icon({ icon: 'group', item, background }),
    },
    {
        name: 'Calendars',
        icon: (item, background) => Icon({ icon: 'calendar', item, background }),
    },
];

export default function UsuarioScreen() {
    const card = ({name}) => console.log('Card'+name);
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 50
      }}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          color: '#cb997e',
          textAlign: 'center',
        }}>
        Panel de administración
      </Text>

      <View style={styles.container}>
            <Dashboard
                data={data}
                background={false}
                card={card}
                column={2}
                rippleColor={'#3498db'}
            />
        </View>

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        width: '100%'
    },
});
