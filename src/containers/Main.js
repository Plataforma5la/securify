import React from 'react';
import { StyleSheet, Text, View, Platform, PROVIDER_GOOGLE, TextInput } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';

import SideMenu from 'react-native-side-menu'

// components
import Buscador from '../components/Search.js'
import Header from '../components/Header.js'
import MenuStakeHolders from '../components/MenuStakeHolders.js'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: null,
      errMessage: null,
      isOpen: false,
    };
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen,
    })
  };

  updateMenu(isOpen){
    this.setState({isOpen})
  };

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
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={ loc }
          >
            <MapView.Marker.Animated
              provider={PROVIDER_GOOGLE}
              coordinate={loc}
              title="La Maqui"
            />
          </MapView>
          <Buscador/>
          <Header/>
        </View>
    :

    <Text View style={styles.textss}>
      BUSCANDO...
    </Text>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -999
  },
  container: {
    flex: 1
  },
  textss: {
      color: 'black',
      fontSize: 20,
  }
});
