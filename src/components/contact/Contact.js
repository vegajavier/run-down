import React, { Component } from 'react';
import './contact.css';

export default class Contact extends Component {
	render() {
		return (
			<section class="contact-section bg-black">
				<div class="container">
					<div class="row">
						<div class="col-md-6 mb-3 mb-md-0">
							<div class="card py-4 h-100">
								<div class="card-body text-center">
									<i class="fas fa-map-marked-alt fa-3x text-primary mb-2" />
									<h4 class="text-uppercase m-0">Location</h4>
									<hr class="my-6" />
									<div class="small text-black-50"> Austin, TX</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 mb-3 mb-md-0">
							<div class="card py-4 h-100">
								<div class="card-body text-center">
									<i class="fas fa-envelope fa-3x text-primary mb-2" />
									<h4 class="text-uppercase m-0">Email</h4>
									<hr class="my-6" />
									<div class="small text-black-50">
										<a href="#"></a>
									</div>
								</div>
							</div>
						</div>

						
					</div>

					<div class="social d-flex justify-content-center">
						<a href="#" class="mx-2">
							<i class="fab fa-twitter fa-3x" />
						</a>
						<a href="#" class="mx-2">
                        <i class="fab fa-instagram fa-3x"></i>
						</a>
					</div>
				</div>
                <br/>
			</section>
		);
	}
}
