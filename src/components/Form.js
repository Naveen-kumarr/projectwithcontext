import React, { Component } from 'react'
//import  './Form.css';
import { Button} from 'react-bootstrap';
import axios from "axios";
class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
            car_id:'',
            car_name:'',
            car_type:'',
            car_color:'',
            car_owner:''
        }
        }
      

            changeID = (e) => {
                this.setState({
                
                    car_id: e.target.value,
                })   
            }
                changeCarName = (e) => {
                    this.setState({
                    
                        car_name: e.target.value,
                    })   
                }
                    changeType = (e) => {
                        this.setState({
                        
                            car_type: e.target.value,
                        })  
                    } 
                        changeColor = (e) => {
                            this.setState({
                            
                                car_color: e.target.value,
                            })   
                        }
                            changeOwner = (e) => {
                                this.setState({
                                
                                    car_owner: e.target.value,
                                })   

               

                
          }
          handleSubmit = (e) =>{
         

         if(!this.state.car_id.match(/^[0-9a-zA-Z]*$/)) {
                alert('Please provide a valid number !')
            }
           
            else if((this.state.car_name!=='') &&(!this.state.car_name.match(/^[a-zA-Z ]*$/))){
                alert('Please provide a valid Car name !')
            }
           
            else if((this.state.car_type!=='') &&(!this.state.car_type.match(/^[a-zA-Z ]*$/))){
                alert('Please provide a valid Car Type !')
            }
           
            else if((this.state.car_color!=='') &&(!this.state.car_color.match(/^[a-zA-Z ]*$/))){
                alert('Please provide a valid text !')
            }
           
            else if((this.state.car_owner!=='') &&(!this.state.car_owner.match(/^[a-zA-Z ]*$/))){
                alert('Please provide a valid Owner Name !')
            }
       
            
            e.preventDefault();
            console.log(this.state)
            axios
            .post('http://192.168.1.131:8000/car_Registration', this.state)
          
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
         
            
    }
    
    render() {
        const { car_id, car_color, car_name, car_type, car_owner } = this.state
        return (
            <div className="body">
                <div className="main">
                    <form >
            
                        <div className="paragraph">
 
                        </div>

                        <div className="feature">
                            <label>Car ID</label>
                           <input className='user' type="text"  name="car_id"  value={car_id}  placeholder='Car ID' onChange={this.changeID}  required/><br /> 
                           
                           <label>Car Name</label>
                            <input className='user' type="text"   name="car_name" value={car_name} placeholder='Car Name' onChange={this.changeCarName}  required/><br /> 
                            <label>Car Type</label>
                            <input className='user' type="text" name="car_type" value={car_type} placeholder='Car Type' onChange={this.changeType}  required /><br /> 
                            <label>Car Color</label>
                            <input className='user' type="text" name="car_color" value={car_color} placeholder='Car Color' onChange={this.changeColor}  required/><br /> 
                            <label>Car Owner</label>
                            <input className='user' type="text"  name="car_owner" value={car_owner} placeholder='Car Owner' onChange={this.changeOwner} required /><br /> 
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>Register</Button>
                       
                  
                       </div>

                     
                
                    </form>  
                </div>    
        </div>

        )
    }
}

export default Form
