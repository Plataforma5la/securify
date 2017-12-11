import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import Modal from 'react-native-modal'

export default class SendSMS extends Component {
  constructor(props) {
   super(props);
   this.state = {
     isModalVisible: false
   }
  }
  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._showModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal  isVisible={this.state.isModalVisible}>
          <View style={styles.modalContainer}>
            <Text>Hello!</Text>
              <Button
              title="Hide Modal"
              color="#841584"
              onPress={this._hideModal} />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  modalContainer: {
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 200,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});