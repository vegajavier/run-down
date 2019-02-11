import React, { Component } from 'react';
import { Media, Jumbotron} from 'react-bootstrap';
import './shows.css'

export default class Pods extends Component {
	render() {
		return (
			<div>
				<div>
					<Jumbotron fluid>
						
					</Jumbotron>;
				</div>

				<div>
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
					
				</div>
			</div>
		);
	}
}
