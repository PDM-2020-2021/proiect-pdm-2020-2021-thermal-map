import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import { Dimensions } from "react-native";
import firebase from '../firebase/config';

export default class Grafic extends Component {
  _isMounted = false;
  constructor(props)
  {
    super(props);
    this.state = {
      data:[1, 2, 3],
      labels:["1", "2", "3"]
    }
  }
  componentDidMount() {
    this._isMounted = true;
    const db = firebase.database().ref('data');
    db.on('value', (snapshot) => {
      //console.log(snapshot);
      let data = [];
        snapshot.forEach((snap) => {
          data = snap.val();
      });
      let frecventa = {};
      let numere = [];
      let fr = []
      data.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator;
      }, frecventa);
      for (var key in frecventa) {
        numere.push(frecventa[key]);
        fr.push(key);
      }
      //console.log(numere);
      //console.log(fr);
      if (this._isMounted) {
        this.setState({labels: fr});
        this.setState({data: numere});
      }
    })
    }
  componentWillUnmount()
  { 
    this._isMounted = false;
    let fr = [];
    let numere = [];
    this.setState({labels: fr});
    this.setState({data: numere});
  }
  render() {
    const data = {
      labels: this.state.labels,
      datasets: [
        {
          data: this.state.data,
          color: (opacity = 1) => `#800080`, // optional
          strokeWidth: 2 // optional
        }
      ],
    };
    const screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <Text style={styles.logo} onPress={() => this.readData()}>Grafic temperaturi</Text>
        <LineChart
            data={data}
            width={screenWidth}
            height={400}
            verticalLabelRotation={30}
            chartConfig={{
              backgroundColor: "#FFFACD",
              backgroundGradientFrom: "#FFFACD",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "2",
                strokeWidth: "3",
                stroke: "red"
              }
            }}
            bezier
        />
      </View>
  );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFACD",
        alignItems: 'center',
        justifyContent: "center",
      },
      logo:{
        fontWeight:"bold",
        fontSize:25,
        color:"#fb5b5a",
        marginBottom:40
      },
});
