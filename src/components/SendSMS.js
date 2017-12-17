import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Communications from 'react-native-communications';

export default class SendSMS extends React.Component{
  
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => Communications.text('1130626601', 'concentrate!')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Send a SMS to the cat Guille</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
    backgroundColor: 'rgb(253,253,253)',
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 32,
  },
});