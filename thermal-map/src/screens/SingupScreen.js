import React, { Component, useState  } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../firebase/config';
import * as firebase1 from 'firebase';

export default class Sinup extends Component {
  state ={
    fullName:"",
    email:"",
    password:""
  }

  async singup() {
    const { navigate } = this.props.navigation;
    try {
        console.log(this.state.email);
        console.log(this.state.password);
        await firebase1.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password);

        console.log("Sing up!");
        navigate('Home');
        // Navigate to the Home page

    } catch (error) {
        console.log(error.toString())
    }
  }
    render(){
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}> 
          <Text style={styles.logo}>Sign Up</Text> 
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            onChangeText={fullName => this.setState({fullName})}
            value = {this.state.fullName}
          />      
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            onChangeText={email => this.setState({email})}
            value = {this.state.email}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            onChangeText={password => this.setState({password})}
            value = {this.state.password}
            maxLength={15}
            secureTextEntry={true}
          />   
          <Button
            color='#fb5b5a'
            title="Signup"
            onPress={() => this.singup()}
          />
  
          <Text 
            style={styles.loginText}
            onPress={() => navigate('LogIn')}>
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
