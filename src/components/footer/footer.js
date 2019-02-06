import React, { Component } from 'react';
import { Navbar, Row, Col, Container } from 'react-bootstrap';

let year = new Date().getFullYear();

export default class Footer extends Component {
	render() {
		return (
			<Navbar sticky="bottom">
				<Container>
					<Col lg="auto">
						<h6>RunDown Podcast Network &copy; {year} </h6>
					</Col>
					<br />
					<Row className="justify-content-md-center">
						<Col lg="2">
							<i class="fab fa-twitter fa-4x" />
							<br />
							<i class="fab fa-instagram fa-4x" />
						</Col>
					</Row>
				</Container>
			</Navbar>
		);
	}
}
