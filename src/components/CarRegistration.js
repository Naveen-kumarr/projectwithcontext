import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
import Form from './Form';
class CarRegister extends Component {
  state = { show: false,
  
  
  };

  

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
render(){

    return (
      <>
        <Button variant="primary" onClick={this.showModal}style={{width:"200px",position: "fixed",  left: "0"}} >
        Car Registration
        </Button>
  
        <Modal show={this.state.show} onHide={this.hideModal} >
          <Modal.Header closeButton>
            <Modal.Title  style={{color:"purple"}}>Enter Car Registration Details</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor:"lightgrey"}}>
          
            <Form/>
          </Modal.Body>
          <Modal.Footer>
          {/* <Button variant="primary" onClick={this.hideModal}>
         register
            </Button>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button> */}
         
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
  export default CarRegister;