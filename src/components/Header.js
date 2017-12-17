import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function Header(props){
  return(
    <View style={styles.barra}>
      <Link to="/contacts">
          <Icon
            style={styles.logo}
            name='bars'
            color='white'
            size={25}
          />
      </Link>
      <Link to={`/`}>
          <Icon
            style={styles.home}
            name='home'
            color='white'
            size={25}
          />
      </Link>
      <Link>
        <Icon
          style={styles.contactos}
          name='gear'
          color='white'
          size={25}
        />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  barra: {
    bottom: 0,
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    position: 'absolute',
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Header;
