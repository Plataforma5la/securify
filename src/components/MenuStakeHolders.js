import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

class MenuStakeHolders extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    console.log('Contactos2222', this.props.contactos);    
    return(
      <ScrollView>
        { this.props.contactos.map((contacts, i)=>{
          return <Text> {contacts.name}  {contacts.phoneNumbers[0].number} </Text>
          }
        )}
      </ScrollView>

    )
  };
};

export default MenuStakeHolders
