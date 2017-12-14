import Autocomplete from 'react-native-autocomplete-input'; // 3.3.1
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {getDirections} from '../redux/actions/actionCreators';
import axios from 'axios';
import { style } from 'expo/src/Font';


const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  touch:{
    width:"100%",
    padding:10,
    borderRadius:5,
    borderWidth:0.5,
    borderColor:"black",
    backgroundColor:"#FFF",
    textAlign:"center",
  },
  autotop:{
    flexDirection:'row',
    width:'100%',
  },
  autocomplete:{
    width:'80%',
    // height: 42,
  },
  touchOpac:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height: 42,
    backgroundColor:'#4286f4',
    width:'20%'
  },
  text:{
    color:'#fff',
  }
});

class AutocompleteEx extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      data: []
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
    if(e.length>3) {
    let result = this._filterData(e);
    result.then(
      data =>{
        let dato = data.data.predictions.map(item =>{
         return item.description.replace('Province, Argentina','').replace(', Argentina','')
        })
        this.setState({
          data:dato
        })
      }
    )
  }else{
    this.setState({data:[]});
  }
  }

  _filterData(e){
    return axios(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e}&types=address&location=${this.props.location.latitude},${this.props.location.longitude}&radius=500&key=AIzaSyCMON2_6RV1GtJanT-wfFU2Ps0pCSV7Mcc`)
      // .then(data =>{
      //     let dato = data.data.predictions.map(item =>{
      //      return item.description;
      //     })
      //     console.log('Datoooo',dato);
      //     return dato;
      //   })
  }

  render() {
    const { text,data } = this.state;
    return (
    <View style={styles.autotop}>
    <View style={styles.autocomplete}>
    <Autocomplete
      data={data}
      defaultValue={text}
      containerStyle={styles.autocompleteContainer}
      onChangeText={this.handleChange}
      renderItem={data => {
        if (data.length)
        return(
        <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0.2)"}} onPress={() => this.setState({ text: data, data:[] })} underlayColor="white">
            <Text style={styles.touch}>{data}</Text>
        </TouchableOpacity>
      )}}
    />
    </View>
    <TouchableOpacity style={styles.touchOpac} onPress={this.handleSubmit}><Text style={styles.text}>Buscar</Text></TouchableOpacity>
    </View>
    );
  }
}

function mapStateToProps(state){
  return {location: state.ubicacionActual}
}

function mapDispatchToProps(dispatch){
  return {
    getDirections: (star,end) => dispatch(getDirections(star,end))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AutocompleteEx)