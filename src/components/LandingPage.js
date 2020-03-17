import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Ibhaan from '../Images/ibhaan.jpg'


class LandingPage extends Component {
    render() {
        return (
           <div className="page1" style={{backgroundColor:"#4d39e9", height:"800px"}}>
  
            <div className="photos">
        
        <img src={Ibhaan} alt="logo" style={{width:"800px", height:"200px", marginTop:"20px"}} />

         </div>
         <br/>
       <Link to= "/userregistration" >
           <button 
       style={{ width:"100px", color:"#B22222"}}>
           DEMO</button></Link>      
 
           </div>
        
        );
    }
}

export default LandingPage;