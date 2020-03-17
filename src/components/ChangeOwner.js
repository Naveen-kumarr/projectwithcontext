import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
import axios from "axios";
class ChangeOwner extends Component {
  constructor(props) {
    super(props);
    this.state={ show: false,
    userName:'',
    car_id:'',
    car_owner:''
  
  
    }
  };
  handleChangeone= e =>{
    this.setState({
        car_id: e.target.value
    })
}

handleChangetwo= e =>{
  this.setState({
      car_owner: e.target.value
  })
}
handleChangethree= e =>{
  this.setState({
      userName: e.target.value
  })
}


submithandle= e=>{
  
  e.preventDefault();
  console.log(this.state)
  axios
  .get('http://192.168.1.131:8000/change_Owner', this.state)

  .then(response => {
      console.log(response)
  })
  .catch(error => {
      console.log(error)
  })
}

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
render(){
  const { userName, car_id, car_owner } = this.state;
    return (
      <>
        <Button variant="primary" onClick={this.showModal}style={{width:"200px",position: "fixed",  left: "0"}} >
        Change Car Owner
        </Button>
  
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Change car owner details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={this.submithandle} >
            <label>User Name</label>
          <input  type="text" placeholder="enter user name" name="userName" 
           value={userName} 
onChange={this.handleChangeone} required/> <br/>
  <label>car ID</label>
<input  type="text" placeholder="enter car id" name="car_id"  value={car_id} 
onChange={this.handleChangetwo} required/> 
<br/>
<label>Car owner</label>
<input  type="text" placeholder="enter car owner" name="car_owner"  value={car_owner} 
onChange={this.handleChangethree} required/> 
<br/>
<Button variant="primary" onClick={this.hideModal}>
       save
            </Button>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
        
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
  export default ChangeOwner;