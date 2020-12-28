import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LogIn from './src/screens/LogInScreen';
import Singup from './src/screens/SingupScreen';
import Home from './src/screens/HomeScreen';
import Istoric from './src/screens/IstoricScreen';
import Grafic from './src/screens/GraficScreen';
import AfisareDate from './src/screens/AfisareDate';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Singup" component={Singup} />
      <Stack.Screen name="Istoric" component={Istoric} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Grafic" component={Grafic} />
      <Stack.Screen name="AfisareDate" component={AfisareDate} />
    </Stack.Navigator>
  );
}
export default class App extends Component {
  render() {
    return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    //<View style={styles.container}>
    //  <Home />
    //</View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
