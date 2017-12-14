import React from 'react';
import { StyleSheet, Text, View, Platform, PROVIDER_GOOGLE, TextInput } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';


class MapViewComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        if(Platform.OS === "android" && !Constants.isDevice){
          this.props.errMessage();      
        } else {
          this.props.getLocationAsync();
        }
    };

    render(){
        return(
            <MapView.Marker
              provider={PROVIDER_GOOGLE}
              coordinate={ this.props.location }
              title="Mi ubicación"
            >
            <View style={styles.radius}>
              <View style={styles.marker}></View>
            </View>
            </MapView.Marker>
        )
    }
}

function mapStateToProps(state){  
    return {location: state.ubicacionActual}
  };
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
  };

const styles=StyleSheet.create({
    radius:{
        height:50,
        width:50,
        borderRadius:50 / 2,
        overflow:'hidden',
        backgroundColor: 'rgba(0,122,255,0.1)',
        borderWidth:1,
        borderColor:'rgba(0,122,255,0.3)',
        alignItems:'center',
        justifyContent:'center'
      },
      marker:{
        height:20,
        width:20,
        borderWidth:3,
        borderColor:'white',
        borderRadius:20 / 2,
        overflow:'hidden',
        backgroundColor:'#007AFF'
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapViewComponent);