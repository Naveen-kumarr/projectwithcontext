import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import CarRegistration from './CarRegistration'
import ChangeOwner from './ChangeOwner';
import Query from './Query'
import {Consumer} from './Context_api/index'

class Sidebar extends Component {
	state={
		authuser:''
	}
	componentDidMount(){
		var a =localStorage.getItem("state")
		this.setState({
			authuser:a
		})
	}
    render()
	{
        return (
		<Consumer>
   {value=>{
	   
	   return (
   <div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home" style={{color:"blue",
   fontSize:"40px", fontStyle:"italic"}}>
      IBHAAN</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
  <Navbar.Collapse id="basic-navbar-nav">
 
 
  </Navbar.Collapse>
</Navbar>
<p>{this.state.authuser}</p>
<CarRegistration /> <br/> <br/>
<ChangeOwner/>

<br/><br/>
<Query/>
   </div>  
            )}}
   </Consumer>
        );
    }
}

export default Sidebar;