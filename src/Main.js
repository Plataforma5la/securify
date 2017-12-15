import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Constants } from 'expo';
import { NativeRouter, Route, Link, withRouter } from 'react-router-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './redux/actions/actionCreators';

import ContactosContainer from './containers/ContactosContainer';

import MapAndAutoComplete from './components/MapAndAutoComplete';
import Header from './components/Header';
import Loadder from './components/Loadder.js';


class Main extends React.Component{

  componentDidMount() {
    this.props.showFirstContactAsync();
    if(Platform.OS === "android" && !Constants.isDevice){
      this.props.errMessage();      
    } else {
      this.props.getLocationAsync();
    };
  };

  render(){
    return(
      <View style={styles.container}>
        {(this.props.contactos[1] && this.props.location.latitude) ? 
          <View style={styles.container}>                      
                  
            <Route exact path='/' component={MapAndAutoComplete}/>
            <Route path='/contacts' component={ContactosContainer}/>
            <Header/>
          </View>
          :
          <View>
           <Loadder />          
          </View>
        }
      </View>
    )
  }
};

function mapStateToProps(state){  
  return {contactos: state.contactosCelular, location: state.ubicacionActual}
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

// import React from 'react';
// import { StyleSheet, View, Platform } from 'react-native';
// import { Constants } from 'expo';

// import { NativeRouter, Route, Link } from 'react-router-native'

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from './redux/actions/actionCreators';

// //Containers
// import MapContainer from './containers/MapContainer';
// import ContactosContainer from './containers/ContactosContainer';

// //Components
// import AutocompleteEx from './components/AutocompleteEx';
// import Header from './components/Header';
// import Loadder from './components/Loadder.js';

// class Main extends React.Component{

//   componentDidMount() {
//     this.props.showFirstContactAsync();
//     if(Platform.OS === "android" && !Constants.isDevice){
//       this.props.errMessage();      
//     } else {
//       this.props.getLocationAsync();
//     };
//   };

//   render(){
//     return(      
//       <View style={styles.container}>
//         {(this.props.contactos[1] && this.props.location.latitude) ? 


//           <View style={styles.container}>            
//             <MapContainer />
//             <View style={styles.buscador}>
//               <AutocompleteEx />
//             </View>
//           </View>


//           :
//           <View>
//             <Loadder />          
//           </View>
//         }
//       </View>                   
//     )
//   }
// };

// function mapStateToProps(state){  
//   return {contactos: state.contactosCelular, location: state.ubicacionActual}
// };

// function mapDispatchToProps(dispatch){
//   return bindActionCreators(actionCreators, dispatch)
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Main);

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//   },
//   buscador:{
//     flexDirection:'column',
//     justifyContent:'space-between',
//     paddingTop: 25
//   }
// });

  // <View style={styles.container}>
  //   {(this.props.contactos[1] && this.props.location.latitude) ? 
  //     <View style={styles.container}>
  //       <ContactosContainer />
  //       <Header />
  //     </View>
  //     :
  //     <View>
  //      <Loadder />          
  //     </View>
  //   }
  // </View>             