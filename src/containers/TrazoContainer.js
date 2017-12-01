import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import Polyline from '@mapbox/polyline';
import { bindActionCreators } from 'redux';
import {getDirections} from '../redux/actions/actionCreators';
import {connect} from 'react-redux';

 class TrazoContainer extends React.Component { 
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.getDirections(`${this.props.location.latitude},${this.props.location.longitude}`,'-34.555179,-58.457056')
  // }

  // componentDidUpdate(prevProps,prevState){
  //   if (prevProps.location.latitude!==this.props.location.latitude || prevProps.location.longitude!==this.props.location.longitude){  
  //     this.getDirections(`${this.props.location.latitude},${this.props.location.longitude}`,'-34.562260,-58.452177')
  //   }
  // }

  // componentDidUpdate(oldProps){
  //   if (this.props.location.latitude !== oldProps.location.latitude) {
  //   this.props.getDirections(`${this.props.location.latitude},${this.props.location.longitude}`,'-34.555179,-58.457056')
  //   } 
  // }

  render() {
    return (
        (this.props.coords) ?
        <MapView.Polyline
            coordinates={this.props.coords}
            strokeWidth={6}
            strokeColor="blue"
        />:
        <View></View>
    )
  }
}

function mapStateToProps(state){
  return {
  coords:state.setCoords,
}
}

// function mapDispatchToProps(dispatch){
//   return {
//     getDirections: (star,end) => dispatch(getDirections(star,end))
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default connect (mapStateToProps,null)(TrazoContainer);