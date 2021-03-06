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
    this._clearInterval = this._clearInterval.bind(this);
    //if(this.state.going) {

    //}
  }

  //starts incrementing the time
  _startTime() {
    //if this method is called and time is going, clear the timer therefore pausing the time
    if(this.going) {
      this._clearInterval(this.state.time);
    }
    //else, start the timer up again
    else {
      this.timerID = setInterval(() => {
        this.setState(previousState => (
          { time: previousState.time+1 }
        ));
      }, 1000);
      this.going = true;
    }
  }

  //clears the timer and resets it to zero
  _clearTime() {
    this.setState(
      { time: 0 }
    );
    this._clearInterval(0);
  }

  //calls the _deleteCategory method from App.js
  _deleteCat() {
    this.props.method(this.props.keyProp);
    this._clearInterval(0);
  }

  //method to clear the timer. Sends the current time to App.js
  _clearInterval(time) {
    clearInterval(this.timerID);
    this.props.timeEvent(this.props.keyProp, time);
    this.going = false;
  }
  render() {
    //calculates the hours, minutes, and seconds from seconds
    let s = this.state.time;
    let m = Math.floor(s/60);
    s %= 60;
    let h = Math.floor(m/60);
    m %= 60;

    /*let percent = "";
    if(this.props.percentage>0) {
      percent = "none";
    }*/

    return (
      <View style={styles.cat}>
        <Text style={styles.text, styles.title}>{this.props.name}</Text>
        <Text style={styles.text}>Time: {h+"h " + m + "m " + s + "s"}</Text>
        <Text style={styles.text}> {"Percent: " + this.props.percentage + "%"} </Text>
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
