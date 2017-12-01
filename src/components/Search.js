import React from 'react';
import {connect} from 'react-redux';
import {getDirections} from '../redux/actions/actionCreators';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Buscador extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(){
      this.props.getDirections(`${this.props.location.latitude},${this.props.location.longitude}`,this.state.text);
  }

  handleChange(e){
    this.setState({
      text:e,
    })
  }

  render(){
    return(
      <View>
        <TextInput
          onSubmitEditing={this.handleSubmit}
          onChangeText={this.handleChange}
          value={this.state.text}
          style={styles.input}
          placeholder="A donde desea ir?"
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

function mapStateToProps(state){
  return {location: state.ubicacionActual}
}

function mapDispatchToProps(dispatch){
  return {
    getDirections: (star,end) => dispatch(getDirections(star,end))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buscador)