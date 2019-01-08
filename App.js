import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import {Category} from './Category.js';
import {AddCategoryPane} from './examples/AddCategoryPane.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      times: []
    };
    this._addCategory = this._addCategory.bind(this);
    this._removeCategory = this._removeCategory.bind(this);
    this._addTime = this._addTime.bind(this);
    this.text = "";
  }

  _addCategory() {
    name=this.text;
    let {categories, times} = this.state;
    categories.push(name);
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
          {/*<TextInput onChangeText={(text) => this.text=text} onSubmitEditing={this._addCategory} />*/}
          <AddCategoryPane/>
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
