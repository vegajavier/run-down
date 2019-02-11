import React, { Component } from 'react';
import { Media, Jumbotron, Container } from 'react-bootstrap';
import './shows.css';

export default class Pods extends Component {
	render() {
		return (
			<div>
				<div>
					<Jumbotron/>
				</div>

				<div>
					<Container>
						<Media>
							<img
								width={120}
								height={120}
								className="mr-3"
								src="/assets/images/49erscover.jpeg"
								alt="Generic placeholder"
							/>
							<Media.Body>
								<h5>4th & Gold Podcast</h5>
								<p />
							</Media.Body>
						</Media>
					</Container>
				</div>
			</div>
		);
	}
}
