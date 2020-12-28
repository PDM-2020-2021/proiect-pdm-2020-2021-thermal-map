import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator } from 'react-native';

export default class AfisareDate extends Component {
  render() {
    return (
        <View style={styles.container}>  
            <Text style={styles.logo}>Thermal Map</Text>                      
        </View>
  );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0099cc',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
      },
});
