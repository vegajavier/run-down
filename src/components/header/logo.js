import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import About from './About'

export default class Logo extends Component{
    render(){
        return(
                 <div>
                    <div>
                        <Image src="/assets/images/blue.jpg" fluid />
                    </div>
                    
                
                    
                    <div>
                        <About/>
                    </div>
                    </div>   
                       
                    
                        
            
            
        )
    }
}