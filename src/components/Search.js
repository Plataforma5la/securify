import React from 'react';
import {connect} from 'react-redux';
import {getDirections} from '../redux/actions/actionCreators';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
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
      <View style={styles.barra}>
        <TextInput
          onSubmitEditing={this.handleSubmit}
          onChangeText={this.handleChange}
          value={this.state.text}
          style={styles.input}
          placeholder="A donde desea ir?"
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

function mapStateToProps(state){
  return {location: state.ubicacionActual}
}

function mapDispatchToProps(dispatch){
  return {
    getDirections: (star,end) => dispatch(getDirections(star,end))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buscador)