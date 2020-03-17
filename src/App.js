import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import './App.css';
import UserRegistration from './components/UserRegistration';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import CarRegistration from './components/CarRegistration'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
            <Switch>
             <Route path="/" component={LandingPage} exact/>
             <Route path="/userregistration" component={UserRegistration}/>
             <Route path="/sidebar" component={Sidebar} />
             <Route path="/carregistration" component={CarRegistration}/>
          
           </Switch>
        
      </BrowserRouter>
    </div> 
  );
}

export default App;
