import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Buscador extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
  }

  render(){
    return(
      <View style={styles.barra}>
        <TextInput
          onChange={({text}) =>this.setState({ text })}
          value={this.state.text}
          style={styles.input}
          placeholder="Where to?"
        />
        <Icon
          style={styles.logo}
          name='search'
          color='white'
          size={25}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  barra: {
    width: '100%',
    paddingTop: 28,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 0.5,
    backgroundColor: 'black',
    color: 'white',
    marginLeft: 20,
  },
  logo: {
    alignSelf: 'center',
    marginRight: 15,
    marginLeft: 5,
    position: 'relative',
    zIndex: 10
  }
});
