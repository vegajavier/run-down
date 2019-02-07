import React, { Component } from 'react';
import './footer.css';

let year = new Date().getFullYear();

export default class Footer extends Component {
	render() {
		return (
			<footer class="bg-black small text-center text-white-50">
				<div class="container">
					<h6>RunDown Podcast Network &copy; {year} </h6>
				</div>
			</footer>
		);
	}
}
