import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import mensajeria from '../screen/MensajeriaScreen';

const MensajeriaStackScreen = () => {
  const messsageStack = createNativeStackNavigator();
  return (
    <messsageStack.Navigator
      screenOptions={{
        headerShown: false, //Sirve para ocultar el nombre del header
      }}>
      <messsageStack.Screen name="mensajeria_chat" component={mensajeria} />
    </messsageStack.Navigator>
  );
};

export default MensajeriaStackScreen;