import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';
import LoginStack from './src/stacks/LoginStack'
import homestack from './src/stacks/HomeStack'
const Stack = createNativeStackNavigator();


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="login" component={LoginStack} />
      <Stack.Screen name="home" component={homestack} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}