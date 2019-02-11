import React, { Component } from 'react';

import { BrowserRouter as Router ,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Shows from './components/shows/shows';
import Home from './components/home/Home'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path  = "/shows" component= {Shows}/>
       </div>
    </Router>
    
    );
  }
}

export default App;
