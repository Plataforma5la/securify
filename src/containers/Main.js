import React from 'react';
import { StyleSheet, Text, View, Platform, PROVIDER_GOOGLE } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import axios from 'axios';

export default class App extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      location: null,
      errMessage: null,
    };
  }

  componentWillMount(){
    if(Platform.OS === "android" && !Constants.isDevice){
      this.setState({
        errMessage: "Esto es un error que no diste permiso la re puta que te pario",
      });
    } else {
      this._getLocationAsync();
    }
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== "granted"){
      this.setState({
        errMessage: "Permiso denegado pollo"
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ 
      location: location.coords 
    });
  };

  // componentDidMount(){
  //   axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.location}&destination=teatro-colon&key=AIzaSyDRN_CBAb2xJa1khS_HRlRInQu7WFjELW8`)
  //   .then()
  // }

  
  render() {
    console.log("ESTADO", this.state.location)
    const loc= {
      latitude: this.state.location && this.state.location.latitude,
      longitude: this.state.location && this.state.location.longitude,
      latitudeDelta: 0.0142,
      longitudeDelta: 0.0121,
    }
    return (
      (this.state.location) ?
      <MapView
       style={{ flex: 1 }}
       initialRegion={ loc } >
      <MapView.Marker.Animated
        provider={PROVIDER_GOOGLE}
        coordinate={loc}
        title="Yo"
      />
    </MapView>:
    <Text>Buscando Ubicacion</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});