import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';

import Spinner from 'react-native-loading-spinner-overlay';
const remote = 'http://2.bp.blogspot.com/-F4DDFCsyg6E/VcqFe4M3VNI/AAAAAAAAIcE/766tkHliI0o/s1600/pink%2Bfloyd%2Blos%2Bmejores%2Bfondos%2Bde%2Bpantalla%2B3.jpg';

export default class Loadder extends React.Component{
  constructor(props) {
    super();
    this.state = {
      visible: true
    };
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{
            flex: 1,
          }}
          source={{ uri: remote }} />
          <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: 'white'}} />
      </View>
    );
  }
};