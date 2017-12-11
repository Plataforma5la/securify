
import Modal from 'react-native-modal'

class MenuStakeHolders extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      isModalVisible: false      
    }
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

  _showModal = () => this.setState({ isModalVisible: true });
  
  _hideModal = () => this.setState({ isModalVisible: false });

  render(){    

  <TouchableOpacity onPress={this._showModal} key={contact.id}  >

    <View style={styles.container}>  
      <View style={styles.divText}>
        <Text style={styles.textName}> {contact.name}</Text>
        
        <Modal isVisible={this.state.isModalVisible}>
          {
          (contact.phoneNumbers) ?
          contact.phoneNumbers.map(num=>{
            return(
              <Text style={styles.textNumber} key={num.id}> {num.number} </Text>
            )
          })
          :
          <Text style={styles.textNumber}> No hay numero registrado </Text>                  
          }
        </Modal>

      </View>
      {
      (this.props.contactosLista.includes(contact.id)) ?
       <View style={styles.div}/> 
        :
       null
      }

    </View>

  </TouchableOpacity>
  
    };
};

    
//   render(){
//     console.log('CONTACTOS', this.props.contactos)
//     return(
//       <ScrollView>

//     {this.props.contactos
//       .filter((contacto) => this.filtrarLetras(this.props.filtrar.length, contacto))
//       .sort((a,b) => {
//         if(a.name > b.name) return 1
//         else return -1
//     })
//       .map((contact)=>{
//         return (
//           <TouchableHighlight key={contact.id} onPress={()=> this.handleClick(contact) } underlayColor="white" >
//             <View style={styles.container}>  
//               <View style={styles.divText}>
//                 <Text style={styles.textName}> {contact.name}</Text>
               
//                 {
//                  (contact.phoneNumbers) ?
//                   contact.phoneNumbers.map(num=>{
//                     return(
//                         <Text style={styles.textNumber} key={num.id}> {num.number} </Text>
//                     )
//                   })
//                   :
//                   <Text style={styles.textNumber}> No tenes un numero pelotudo </Text>                  
//                 }

//               </View>
//               {
//                 (this.props.contactosLista.includes(contact.id)) ?
//                 <View style={styles.div}/> : null
//               }
//             </View>
//           </TouchableHighlight>

//         )
//         }
//       )}

//       </ScrollView>

//     )
//   };
// };

// function mapStateToProps(state){  
//   return {contactosLista: state.contactosLista}
// };

// function mapDispatchToProps(dispatch){
//   return bindActionCreators(actionCreators, dispatch)
// }