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
import firebase from '../firebase/config';

export default class LogIn extends Component
{
  state={
    email:"",
    password:""
  }
  async login() {
    const { navigate } = this.props.navigation;
    try {
        console.log(this.state.email);
        console.log(this.state.password);
        await firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password);

        console.log("Logged In!");
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
        <Text style={styles.logo}>Log In</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={email => this.setState({email})}
            value = {this.state.email}
            onSubmitEditing={()=> this.password.focus()}>
          </TextInput>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry={true}
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={password => this.setState({password})}
            value = {this.state.password}
            ref={(input) => this.password = input}>
            </TextInput>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => this.login()}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText} onPress={() =>navigate('Singup')}>Signup</Text>
        </TouchableOpacity>
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
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"black",
    marginBottom:40,
    textDecorationLine: 'underline',
  },
  inputView:{
    width:"100%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"100%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white",
    alignSelf: 'center',
  }
});