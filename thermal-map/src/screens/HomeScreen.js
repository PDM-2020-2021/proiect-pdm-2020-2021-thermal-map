import React from 'react';
import { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity ,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.container}>  
            <Text style={styles.logo}>Thermal Map</Text>
                <Button
                    style={styles.button}
                    title="Afisare date senzori"
                    onPress={() => this.props.navigation.navigate('AfisareDate')}>
                </Button>
                <View style={styles.space} />
                <Button
                    style={styles.button}
                    title="Istoric"
                    onPress={() => this.props.navigation.navigate('Istoric')}>
                </Button>
                <View style={styles.space} />
                <Button
                    style={styles.button}
                    title="Grafic temperaturi"
                    onPress={() => this.props.navigation.navigate('Grafic')}>
                </Button>                     
        </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: 'white',
  },
  button: {
    borderColor: "transparent",
    borderRadius: 20,
    width: 250,
    height: 200,
    fontSize: 20
    },
  space: {
    width: 20, 
    height: 20,
  },
  logo:{
    padding: 15,
    fontWeight:"bold",
    fontSize:50,
    color:"black",
    marginBottom:40
  },
});
