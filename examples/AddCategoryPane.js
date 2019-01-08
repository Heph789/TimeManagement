import React, {Component} from 'react';
import {Modal, Text, Button, TouchableHighlight, View, Alert, TextInput , StyleSheet} from 'react-native';

export class AddCategoryPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this._addCategory = this._addCategory.bind(this);
    this.text = "";
  }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _addCategory() {
    this.props._addCategory(this.text);
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={styles.container} style={{}}>
            <View style={styles.container2}>
              <TextInput
                onChangeText={(text) => this.text=text}
                onSubmitEditing={this._addCategory}
                placeholder="Category Name"
                style={styles.input}
              />

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}
          title="Show Modal"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderWidth:1,
    justifyContent: "center",
    alignItems: "center"
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  },
  input: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: '80%'
  }
});
