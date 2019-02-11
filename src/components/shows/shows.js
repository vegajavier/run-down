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
						<Media.Body>
						<iframe src="https://anchor.fm/4thgold-podcast/embed" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
								<h5>4th & Gold Podcast</h5>
								<p> 4th & Gold Podcast Hosted by Javier Vega, brings you everything 49ers related. </p>
								<p />
							</Media.Body>
						</Media>
					</Container>
				</div>
			</div>
		);
	}
}
