import React, { Component } from 'react';
import './about.css';

export default class About extends Component {
	render() {
		return (
			<section id="about" class="about-section text-center">
    			<div class="container">
      				<div class="row">
        				<div class="col-lg-8 mx-auto">
          				<h2 class="text-white mb-4">Our Mission</h2>
          				<p class="text-white-50">Founder, and sports enthusiasts
            			 The RunDown Podcast Network is here to empower the voices of the most dedicated fans.</p>
        				</div>
      				</div>
      				<img src="/assets/media/jav.jpg" class="img-fluid" alt=""/>
    			</div>
  			</section>
		);
	}
}
