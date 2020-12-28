import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';

export default class Singup extends Component {
  state = { 
    displayName: '',
    email: '', 
    password: '',
    isLoading: false
  }
  render() {
    return (
        <View style={styles.container}> 
          <Text style={styles.logo}>Sign Up</Text> 
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          />      
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
          />   
          <Button
            color='#fb5b5a'
            title="Signup"
            onPress={() => this.registerUser()}
          />
  
          <Text 
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('LogIn')}>
            Already Registered? Click here to login
          </Text>                          
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
    backgroundColor: '#0099cc',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: 'white',
    marginTop: 25,
    textAlign: 'center'
  },
  logo:{
    fontWeight:"bold",
    fontSize:35,
    color:"black",
    marginBottom:40,
    textDecorationLine: 'underline'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
