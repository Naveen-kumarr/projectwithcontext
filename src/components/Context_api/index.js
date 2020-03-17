import React, { Component, createContext } from 'react'
import axios from "axios";
export const Records = createContext();

class Provider extends Component {
    state = {
       username:""
    }
	
	handleChange = (e) =>{
		this.setState({
			username:e.target.value
		})
	}
	handleSubmit=(e)=>{
		e.preventDefault();
    console.log(this.state.username)
	localStorage.setItem('state', this.state.username);
    axios
    .post('http://192.168.1.131:8000/userRegistration', this.state.username)
  
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        window.location.href = "/sidebar"
    })
	}
	
    
    render() {

        return (
            <Records.Provider value={{
                ...this.state,
				handleChange:this.handleChange,
				handleSubmit:this.handleSubmit
            }}>
                {this.props.children}
            </Records.Provider>
        )
    }
}
const Consumer = Records.Consumer;
export { Consumer, Provider };