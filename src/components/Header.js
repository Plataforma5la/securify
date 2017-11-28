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
          style={styles.contactos}
          name='gear'
          color='white'
          size={25}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Icon
          style={styles.home}
          name='home'
          color='white'
          size={25}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Icon
          style={styles.logo}
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
    paddingTop: 10,
    bottom: 0,
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    position: 'absolute',
  },
  contactos: {
    alignSelf: 'flex-end',
    marginRight: 15,
    position: 'relative',
 },
 logo: {
   alignSelf: 'flex-start',
   position: 'absolute',
   marginLeft: 15,
 },
 home: {
   alignSelf: 'center',
   position: 'absolute',
 }
});

export default Header;
