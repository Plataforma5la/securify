import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import Polyline from '@mapbox/polyline';

export default class TrazoContainer extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      coords:[]
    };
  }

  componentDidMount(){
    this.getDirections(`${this.props.location.latitude},${this.props.location.longitude}`,'-34.562260,-58.452177')
  }

  componentDidUpdate(prevProps,prevState){
    if (prevProps.location.latitude!==this.props.location.latitude || prevProps.location.longitude!==this.props.location.longitude){  
      this.getDirections(`${this.props.location.latitude},${this.props.location.longitude}`,'-34.562260,-58.452177')
    }
  }

  async getDirections(startLoc, destinationLoc) {
    try {
      let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&region=ar`)
      let respJson = await resp.json();
      console.log(respJson);
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point, index) => {
          return  {
              latitude : point[0],
              longitude : point[1]
          }
      })
      this.setState({coords: coords})
      return coords
    } catch(error) {
      alert(error)
      return error
    }
  }
 
  render() {
    return (
        <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={6}
            strokeColor="blue"
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});