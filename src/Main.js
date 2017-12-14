import React from 'react';
import { StyleSheet, View, Platform, Button, TouchableOpacity, Text, TouchableNativeFeedback } from 'react-native';
import { Provider } from 'react-redux';

import store from './store.js'

import MapContainer from './containers/MapContainer';
import Header from './components/Header';
import Search from './components/Search';
import AutocompleteEx from './components/AutocompleteEx';

export default class Main extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <View style={styles.container}>
          <MapContainer />
          <Header/>
          <View style={styles.buscador}>
            <AutocompleteEx />
          </View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 25
  },
  buscador:{
    flexDirection:'column',
    justifyContent:'space-between',
  }
});
  