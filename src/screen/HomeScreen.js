import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import LoginStack from '../stacks/LoginStack';
import UbicacionStackScreen from '../stacks/UbicacionStackScreen';
import MensajeriaStackScreen from '../stacks/MensajeriaStackScreen';
import UserStackScreen from '../stacks/UserStackScreen';


const Tab = createMaterialBottomTabNavigator();
export default function homeScreen() {
    return (
        
        <NavigationContainer independent={true}>
            <Tab.Navigator activeColor='#cb997e' inactiveColor='#ffe8d6' barStyle={{
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
                        <Entypo name='location' size={25} style={{color: focused ? 'green' : '#303030'}} />
                    )
                }} />
                <Tab.Screen name='Mensaje' component={MensajeriaStackScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo name='message' size={25} style={{color: focused ? 'green' : '#303030'}} />
                    )
                }} />
                <Tab.Screen name='Usuario' component={UserStackScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <Icon name='user' size={25} style={{color: focused ? 'green' : '#303030'}} />
                    )
                }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
