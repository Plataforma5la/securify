import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  FlatList,
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
		this.renderRow = this.renderRow.bind(this);
  };

  handleClick(contact){
    const index = this.props.contactosLista.indexOf(contact.id)
    if(index > -1) {
      this.props.borrarLista(index)
    } else{
      this._showModal(contact)
    }
  };

  renderRow({ item: contact }) {
    return (  
      <TouchableOpacity onPress={()=> this.handleClick(contact)} key={contact.id} style={styles.container}  >
        <View style={styles.divText}>
        <Text style={styles.textName}> {contact.name}</Text>
        
        <Modal isVisible={this.state.selectContact === contact.id && this.state.isModalVisible}>
          <View style={styles.divPart}>
          <Text style={styles.textModal}>Seleciona un numero de {contact.firstName}</Text>
          </View>
          {
          (contact.phoneNumbers) ?
          contact.phoneNumbers.map(num=>{
          return(
            <View style={styles.modalContainer} key={num.id} >
            <TouchableOpacity onPress={()=> this.numberClick(contact, num)} >
                <Text style={styles.textNumberModal} > {num.number} </Text>
            </TouchableOpacity>
            </View>
          )
          })
          :
          <Text style={styles.textNumber}> No hay numero registrado </Text>                  
          }

        <Button
          title="Cancelar"
          onPress={this._hideModal}
        />
        </Modal>

        {
          (this.props.contactosLista.includes(contact.id)) ?
          <Text style={styles.textNumber} > {this.state.numSelect[contact.id]}</Text>
          :
          null
        }       
        
        </View>
        {
        (this.props.contactosLista.includes(contact.id)) ?
          <View>
          <View style={styles.div}/>
          </View>            
          :
          null
        }
      </TouchableOpacity>
    )
  }

  numberClick(contacto, num){
    this.setState({
      isModalVisible: false
    })
    this.props.agregarLista(contacto.id);
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
    return(
      <FlatList
       data={this.props.contactos
            .filter((contacto) => this.filtrarLetras(this.props.filtrar.length, contacto))
            .sort((a,b) => {
            if(a.name > b.name) return 1
            else return -1
			})} 
      renderItem={this.renderRow}
      keyExtractor={(item) => item.id}
      />
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
  textNumberModal: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 20,   
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
    display: 'flex',
    justifyContent: 'center',        
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 0.8,
    borderColor: 'black',
  },
  divPart: {
    display: 'flex',
    justifyContent: 'center',        
    height: 60,
    width: '100%',
    backgroundColor: '#ECF0F1',
    borderWidth: 0.8,
    borderColor: 'black',
  },
  textModal: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: 'bold',    
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuStakeHolders);