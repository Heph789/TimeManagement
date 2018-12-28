import React from 'react';
import {StyleSheet, View, Text, Alert, Button} from 'react-native';

export class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
    };
    this.going = false;
    this.timerID = 1;
    this._startTime = this._startTime.bind(this);
    this._clearTime = this._clearTime.bind(this);
    this._deleteCat = this._deleteCat.bind(this);
    //if(this.state.going) {

    //}
  }

  _startTime() {
    if(this.going) {
      clearInterval(this.timerID);
    }
    else {
      this.timerID = setInterval(() => {
        this.setState(previousState => (
          { time: previousState.time+1 }
        ));
        this.props.timeEvent(this.props.keyProp);
      }, 1000);
    }
    this.going = !this.going;
  }

  _clearTime() {
    this.setState(
      { time: 0 }
    );
  }

  _deleteCat() {
    this.props.method(this.props.keyProp);
  }

  render() {
    let s = this.state.time;
    let m = Math.floor(s/60);
    s %= 60;
    let h = Math.floor(m/60);
    m %= 60;
    return (
      <View style={styles.cat}>
        <Text style={styles.text, styles.title}>{this.props.name}</Text>
        <Text style={styles.text}>Time: {h+"h " + m + "m " + s + "s"}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Time" onPress={this._startTime}/>
          <Button title="Reset" onPress={this._clearTime}/>
          <Button title="DELETE" onPress={this._deleteCat}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cat: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  title: {
    fontSize: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'space-evenly',
    width: '60%',
  }
});
