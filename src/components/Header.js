import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function Header(props){
  return(
    <ScrollView style={styles.barra}>
      <TouchableWithoutFeedback>
        <Icon
          style={{alignSelf: 'flex-end', marginRight: 20}}
          name='bars'
          color='white'
          size={25}
        />
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  barra: {
    paddingLeft: 10,
    paddingTop: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#272D27',
  },
});

export default Header;
