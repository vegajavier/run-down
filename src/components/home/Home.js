import React, { Component } from 'react';
import Logo from '../header/logo';
import About from '../header/About';
import Contact from '../contact/Contact';
import Subscribe from '../subscribe/Subscribe';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Logo />
				<About />
				<Contact />
				<Subscribe />
			</div>
		);
	}
}
