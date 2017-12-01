import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Provider } from 'react-redux';

import store from './store.js'

import MapContainer from './containers/MapContainer';
import ContactosContainer from './containers/ContactosContainer';

import Header from './components/Header';
import Search from './components/Search';

export default class Main extends React.Component{
  render(){
    return(
      <Provider store= {store}>
        <View style={styles.container}>
          <ContactosContainer />
          <Header />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
  