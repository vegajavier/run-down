import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Logo from './components/header/logo'
import Footer from './components/footer/footer'


class App extends Component {
  render() {
    return (
      <header>
        <Navbar/>
          
            <Logo/>
            <Footer/>
          
      </header>
      
      
    );
  }
}

export default App;
