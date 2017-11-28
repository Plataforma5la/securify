import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
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
      <View>
        <TextInput
          onChange={({text}) =>this.setState({ text })}
          value={this.state.text}
          style={styles.input}
          placeholder="Where to?"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    margin: 20,
    marginTop: 80,
    height: 40,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  logo: {
    width: 120,
    height: 40,
  }
});
