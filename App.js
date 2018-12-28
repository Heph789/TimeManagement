import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {Category} from './Category.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: ["Video Games", "Instagram", "TV", "Coding"],
      times: [0, 0, 0, 0]
    };
    this._addCategory = this._addCategory.bind(this);
    this._removeCategory = this._removeCategory.bind(this);
    this._addTime = this._addTime.bind(this);
  }

  _addCategory() {
    let {categories, times} = this.state;
    categories.push("hello");
    times.push(0);
    console.log(categories);
    console.log(times);
    this.setState({
      categories: categories,
      times: times
    });
    //console.log(JSON.stringify(arr));
  }
  _removeCategory(key) {
    let {categories, times} = this.state;
    categories.splice(key, 1);
    times.splice(key, 1);
    console.log(categories);
    console.log(times);
    this.setState({
      categories: categories,
      times: times
    });
  }

  _addTime(key, time) {
    let times = this.state.times;
    times[key] = time;
    this.setState({
      times: times
    });
  }

  render() {
    let tempArr = this.state.categories.map((a, i) => {
      return <Category name={a} key={a} keyProp={i} method={this._removeCategory} time={this.state.times[i]} timeEvent={this._addTime}/>
    })

    return (
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
          {tempArr}
        </View>
        <View style={styles.bottomMenu}>
          <Button onPress={this._addCategory} title="Button"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    flex: 9
  },
  bottomMenu: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
