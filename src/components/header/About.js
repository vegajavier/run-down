import React, { Component } from 'react';
import { Container, Media } from 'react-bootstrap';
import './about.css';

export default class About extends Component {
	render() {
		return (
			<Container>
				<br />
                <br/>

				<Media>
					<img src="assets/media/jav.jpg" alt="Thumbnail" className="img-thumbnail img-responsive" />
					<Media.Body>
						<h5>Javier Vega</h5>
						<p>
							Founder, and sports enthusiast. 
						</p>
					</Media.Body>
				</Media>
			</Container>
		);
	}
}
