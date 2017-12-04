import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';

class MenuStakeHolders extends React.Component{
  constructor(props){
    super(props);
  };
  handleClick(contacts){
    if(this.props.contactosLista.includes(contacts.id)) {
      const index = this.props.contactosLista.findIndex(agregado => agregado === contacts.id)
      this.props.borrarLista(index)
    } else{
      this.props.agregarLista(contacts.id)
    }
  }
  render(){
    console.log('Contactos2222', this.props.contactos);    
    return(
      <ScrollView>

      {this.props.contactos.sort((a,b) => {
        if(a.name > b.name) return 1
        else return -1
      }).map((contacts)=>{
        return (
          <TouchableHighlight onPress={()=> this.handleClick(contacts) } underlayColor="white" >
            <View key={contacts.id} style={styles.container}>
              
                <View style={styles.divText}>
                  <Text style={styles.textName}> {contacts.name}</Text>
                  <Text style={styles.textNumber}>{contacts.phoneNumbers[0].number} </Text>
                </View>
                {
                  (this.props.contactosLista.includes(contacts.id)) ?
                  <View style={styles.div}/> : null
                }
            </View>
          </TouchableHighlight>

        )
        }
      )}

      </ScrollView>

    )
  };
};

function mapStateToProps(state){  
  return {contactosLista: state.contactosLista}
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,    
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',    

  },
  textName: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 20,
  },
  textNumber: {
    color: 'black',
    fontSize: 12,
    paddingLeft: 30, 
  },
  div: {
    width: 20,
    height: 20,
    backgroundColor : 'red',
    marginRight: 30,
  },
  divText:{
    display: 'flex',
    flexDirection: 'column',    
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuStakeHolders);

// ejecutar(){
//   const objConts = [{}]
//   this.props.contactos.forEach((contacts, i)=>{
//     if(objConts[0][contacts[0]]) {
//       objConts[0][contacts[0]].push(contacts);
//     } else {
//       objConts[0][contacts[0]] = [contacts]
//     }
//   })
//   return objConts
// };

// <View style={styles.container}>
// <SectionList
//     sections={ objConts }
//     renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//     renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//     keyExtractor={(item, index) => index}
// />
// </View>
