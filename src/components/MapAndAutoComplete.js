import React from 'react';
import { StyleSheet, View } from 'react-native';

import MapContainer from '../containers/MapContainer';
import AutocompleteEx from './AutocompleteEx';


export default MapAndAutoComplete = () =>(
  <View style={styles.container}>            
    <MapContainer />
    <View style={styles.buscador}>
      <AutocompleteEx />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  buscador:{
    flexDirection:'column',
    justifyContent:'space-between',
    paddingTop: 25
  }
});