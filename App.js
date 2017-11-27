import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import App from './src/containers/Main';

export default App;

// extends React.Component { 
//   constructor(props){
//     super(props);
//     this.state = {
//       location: null,
//       errMessage: null,
//     };
//   }

//   componentWillMount(){
//     if(Platform.OS === "android" && !Constants.isDevice){
//       this.setState({
//         errMessage: "Esto es un error que no diste permiso la re puta que te pario",
//       });
//     } else {
//       this._getLocationAsync();
//     }
//   };

//   _getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if(status !== "granted"){
//       this.setState({
//         errMessage: "Permiso denegado pollo"
//       });
//     }
//     let location = await Location.getCurrentPositionAsync({});
//     this.setState({ 
//       location: location.coords 
//     });
//   };
  
//   render() {
//     console.log("STADO", this.state.location)
//     const loc={
//       latitude: this.state.location && this.state.location.latitude,
//       longitude: this.state.location && this.state.location.longitude,
//       latitudeDelta: 0.0142,
//       longitudeDelta: 0.0121,
//     }
//     return (
//       (this.state.location) ?
//       <MapView
//        style={{ flex: 1 }}
//        initialRegion={ loc } >
//       <MapView.Circle
//         center={ loc }
//         radius= {15}
//         strokeWidth={4}
//         strokeColor={"red"}
//         zIndex={1000}
//       />
//     </MapView>:
//     <Text>Buscando Ubicacion</Text>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
