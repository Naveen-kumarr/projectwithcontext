import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Consumer} from './Context_api/index'

import axios from "axios";
class UserRegistration extends Component {
	

    render() {
        
		const user = this.context;
		
return (
<Consumer>
{value=>{
	   return (
<div className="uname" style={{alignItems:'center', backgroundColor:"darkblue", height:"800px", paddingTop:"200px"}}>
 <form onSubmit={value.handleSubmit} >
 <h1 style={{color:"white"}}>USER REGISTRATION</h1>

<input  type="text" placeholder="enter user name" name="username"  value={value.username} 
onChange={value.handleChange} required/> 
<br/>
<Link to= "/sidebar">  </Link>  


           <button  type="submit" onClick={value.getData}
       style={{backgroundColor: "#E6E6FA", width:"80px", marginTop:"10px"}}>
           Resgister </button>
               
 
         </form>
         </div>
		 )
}}
		 </Consumer>
        );
    }
}

export default UserRegistration;