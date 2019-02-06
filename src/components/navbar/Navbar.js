import React, { Component } from 'react';
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';

export default class customNav extends Component {
	render() {
		return (
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">
					<img src="/assets/images/transparent.png" width="100" alt="logo" />
				</Navbar.Brand>
				<Container>
					<br />
					<Row className="justify-content-md-center">
						<Col lg="10">
							<Nav className="mr-auto">
								<Nav.Link href="#shows">Shows</Nav.Link>
								<Nav.Link href="#shows">Join</Nav.Link>
							</Nav>
						</Col>
					</Row>
				</Container>
			</Navbar>
		);
	}
}
