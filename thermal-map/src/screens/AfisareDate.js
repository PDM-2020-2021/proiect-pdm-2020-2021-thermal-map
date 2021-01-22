import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../firebase/config';
import ReactTable from "react-table";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class AfisareDate extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      data:[],
      head:[]
    }
  }
  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
    const db = firebase.database().ref('data');
    db.on('value', (snapshot) => {
      //console.log(snapshot);
      let data = [];
        snapshot.forEach((snap) => {
          data = snap.val();
      });
      let final_data = []; 
      let cv = [];
      let head = [];
      let index = 0;
      data.forEach((i) => {
        if(index<8)
        {
          head.push(i);
          index++;
        }
        else{
        if (index%8==0 && index != 8)
        {

          final_data.push(cv);
          cv = [];
        }
        index++;
        cv.push(i);
      }
      })
      final_data.push(cv);
      if (this._isMounted) {
        this.setState({head: head});
        this.setState({data: final_data});
      }
    })
    }
    componentWillUnmount()
    {
      this._isMounted = false;
      let fr = [];
      let numere = [];
      this.setState({head: fr});
      this.setState({data: numere});
    }
  render() {
    return (
        <View style={styles.container}>  
            <Text style={styles.logo} onPress={() => this.readData()}>Afisare date</Text>  
            <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
              <Row data={this.state.head} style={styles.head} textStyle={styles.text}/>
              <Rows data={this.state.data} style={styles.head} textStyle={styles.text}/>
            </Table>
        </View>
  );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      logo:{
        justifyContent:"center",
        alignSelf: "center",
        fontWeight:"bold",
        fontSize:30,
        color:"#fb5b5a",
        marginBottom:40
      },
      head: {
         height: 50,
         backgroundColor: '#f1f8ff' 
        },
        wrapper: { flexDirection: 'row' },
        row: {  height: 28  },
      text: { textAlign: 'center' }
});
