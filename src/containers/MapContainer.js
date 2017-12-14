import React from 'react';
import { StyleSheet, Text, View, Platform, PROVIDER_GOOGLE, TextInput } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';
import MapViewComponent from '../components/Maps'

import Trazo from '../containers/TrazoContainer';

class MapContainer extends React.Component {
 constructor(props){
    super(props);
  }

  componentDidMount(){
    if(Platform.OS === "android" && !Constants.isDevice){
      this.props.errMessage();      
    } else {
      this.props.getLocationAsync();
    }
  };

  render() {
    return (
      (this.props.location.latitude) ?
      <MapView
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        region={ this.props.location }
      >
      {/* <MapViewComponent/> */}
      <Trazo location={ this.props.location } />
      </MapView>
    :
    <Text style={styles.textss}>
      BUSCANDO...
    </Text>
    );
  }
}

function mapStateToProps(state){  
  return {location: state.ubicacionActual}
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -999,
    },
  textss: {
    color: 'black',
    fontSize: 20,
    position: 'relative'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
