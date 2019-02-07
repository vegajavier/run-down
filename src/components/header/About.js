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
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
							commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
							condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</p>
					</Media.Body>
				</Media>
			</Container>
		);
	}
}
