import React, { Component } from 'react';
//import {Image} from 'react-bootstrap';
import './logo.css';

export default class Logo extends Component {
	render() {
		return (
			<header id = "page-top" class="masthead">
				<div class="container d-flex h-100 align-items-center">
					<div class="mx-auto text-center">
						<h2 class="text-white-50 mx-auto mt-2 mb-5">A Network for the fans</h2>
						<a href="#about" class="btn btn-primary js-scroll-trigger">
							Get Started
						</a>
					</div>
				</div>
			</header>
		);
	}
}
