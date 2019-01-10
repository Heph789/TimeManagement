import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import {Category} from './Category.js';
import {AddCategoryPane} from './examples/AddCategoryPane.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      times: [],
      percents: []
    };
    this._addCategory = this._addCategory.bind(this);
    this._removeCategory = this._removeCategory.bind(this);
    this._addTime = this._addTime.bind(this);
    this._calculate = this._calculate.bind(this);
    //this.text = "";
  }

  _addCategory(name) {
    let {categories, times, percents} = this.state;
    let noRepeat = true;
    for(let cat of categories) {
      if (name === cat) {
        noRepeat = false;
      }
    }
    if (noRepeat) {
      categories.push(name);
      times.push(0);
      percents.push(0);
      this.setState({
        categories: categories,
        times: times
      });
    }
    else {
      Alert.alert("Category already exists");
    }
    //console.log(JSON.stringify(arr));
  }

  _calculate() {
    let times = this.state.times;
    let percents = this.state.percents;
    let total = 0;
    for (let time of times) {
      total+=time;
    }
    console.log(total);
    for (let i=0; i<times.length; i++) {
      percents[i] = Math.round((times[i]/total)*100);
    }
    this.setState({percents: percents})
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
      return <Category name={a} key={a} keyProp={i} method={this._removeCategory} time={this.state.times[i]} percentage={this.state.percents[i]} timeEvent={this._addTime}/>
    })

    return (
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
          {tempArr}
        </View>
        <View style={styles.bottomMenu}>
          {/*<TextInput onChangeText={(text) => this.text=text} onSubmitEditing={this._addCategory} />*/}
          <View style={{marginBottom: 10}}><Button title="Calculate" onPress={this._calculate} /></View>
          <AddCategoryPane addCategory={this._addCategory}/>
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
