import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './src/screens/LogInScreen';
import Singup from './src/screens/SingupScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Singup" component={Singup} />
    </Stack.Navigator>
  );
}
export default class App extends Component {
  render() {
    return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
