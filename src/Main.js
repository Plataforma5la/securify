import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import Mapa from './containers/MapContainer';
import Header from './components/Header';
import Search from './components/Search';

export default class Main extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Mapa />
                <Header />
                <Search />    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });
  