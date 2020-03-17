import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
class Query extends Component {
  state = { show: false };

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
      QuERY
        </Button>
  
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Car Registration Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
           
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
  export default Query;