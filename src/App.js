import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Logo from './components/header/logo'
import Footer from './components/footer/footer'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <Logo/>
          <Footer/>

      </div>
      
       
    
            
          
      
      
      
    );
  }
}

export default App;
