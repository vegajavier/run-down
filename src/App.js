import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Logo from './components/header/logo'
import Footer from './components/footer/footer'
import About from './components/header/About'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <Logo/>
          <container>
                        <About/>
                    </container>
          <Footer/>

      </div>
      
       
    
            
          
      
      
      
    );
  }
}

export default App;
