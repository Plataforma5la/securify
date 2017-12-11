import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from 'react-native';

import Modal from 'react-native-modal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';


class MenuStakeHolders extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      isModalVisible: false,
      selectContact: '',
      numSelect: {},
    };
    this.filtrarLetras = this.filtrarLetras.bind(this)
  };

  handleClick(contacts){
    if(this.props.contactosLista.includes(contacts.id)) {
      const index = this.props.contactosLista.findIndex(agregado => agregado === contacts.id)
      this.props.borrarLista(index)
    } else{
      this.props.agregarLista(contacts.id)
    }
  };

  numberClick(contacto, num){
    this.setState({
      numSelect: {
        ...this.state.numSelect,
        [contacto.id]: num.number
      },
      isModalVisible: false
    })
  }

  filtrarLetras(valor, contacto){
    if(valor){
      return contacto.firstName.toLowerCase().slice(0, valor) === this.props.filtrar.toLowerCase()
    }
    return true
  };

  _showModal = (contact) => {
    this.setState({ isModalVisible: true, selectContact: contact.id })
  };
  
  _hideModal = () => this.setState({ isModalVisible: false });
    
  render(){
    console.log('CONTACTOS', this.props.contactos)
    return(
      <ScrollView>

    {this.props.contactos
      .filter((contacto) => this.filtrarLetras(this.props.filtrar.length, contacto))
      .sort((a,b) => {
        if(a.name > b.name) return 1
        else return -1
    })
      .map((contact)=>{

        return (

          <TouchableOpacity onPress={()=> this._showModal(contact)} key={contact.id}  >
            <View style={styles.container}>  
              <View style={styles.divText}>
                <Text style={styles.textName}> {contact.name}</Text>
                
                <Modal isVisible={this.state.selectContact === contact.id && this.state.isModalVisible}>
                  {
                  (contact.phoneNumbers) ?
                  contact.phoneNumbers.map(num=>{
                    return(
                      <View style={styles.modalContainer} key={num.id} >
                        <TouchableOpacity onPress={()=> this.numberClick(contact, num)} >
                          <Text style={styles.textNumber} > {num.number} </Text>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                  :
                  <Text style={styles.textNumber}> No hay numero registrado </Text>                  
                  }

                <Button
                  title="Cancelar"
                  color="#841584"
                  onPress={this._hideModal} 
                />
                </Modal>

                {   
                 (this.state.numSelect[contact.id]) ?
                    <Text style={styles.textNumber} > {this.state.numSelect[contact.id]}</Text>
                    :
                    null
                }       

                </View>

              {

                (this.state.numSelect[contact.id]) ?
                  <View>
                    <View style={styles.div}/>
                  </View>            
                  :
                  null
              }

            </View>
          </TouchableOpacity>

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
    height: 60,
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
  },
  modalContainer: {
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 200,
    backgroundColor: '#F5FCFF',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuStakeHolders);