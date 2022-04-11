import React, { useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import UbicacionStackScreen from '../stacks/UbicacionStackScreen';
import MensajeriaStackScreen from '../stacks/MensajeriaStackScreen';
import UserStackScreen from '../stacks/UserStackScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Tab = createMaterialBottomTabNavigator();
const url = '/api/psicologos'
export default function homeScreen() {
    return (
        
        <NavigationContainer independent={true}>
            <Tab.Navigator activeColor='#cb997e' inactiveColor='black' barStyle={{
                backgroundColor: '#ffffff',
                position: 'absolute',
                height: 80,
                borderRadius: 15,
                justifyContent: 'center',
                left: 10,
                right: 10,
                elevation: 5
            }}>
                <Tab.Screen name='Ubicación' component={UbicacionStackScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo name='location' size={20} style={{color: focused ? 'green' : '#303030'}} />
                    )
                }} />
                <Tab.Screen name='Agendar citas' component={MensajeriaStackScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <Fontisto name='date' size={20} style={{color: focused ? 'green' : '#303030'}} />
                    )
                }} />
                <Tab.Screen name='Usuario' component={UserStackScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <Icon name='user' size={20} style={{color: focused ? 'green' : '#303030'}} />
                    )
                }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
