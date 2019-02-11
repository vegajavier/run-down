import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import './navbar.css';

export default class customNav extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#page-top">The Run Down</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#about">About Us</Nav.Link>
						<Nav.Link href="./shows">Podcast</Nav.Link>
						
					</Nav>
					<Nav>
						<Nav.Link href="#signup">Join</Nav.Link>
						
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
