import React, { Component } from 'react';
import { Button, Label, Col, Row, Modal, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			touched: {
				name: false,
				email: false,
			},
			isModalOpen: false,
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.send = this.send.bind(this);
	}
	handleSubmit(values) {
		this.toggleModal();
		//alert('Current state is: ' + JSON.stringify(values));
	}

	send() {
		this.toggleModal();
		this.props.resetState();
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	renderModal() {
		return (
			<div>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalBody>
						<p>Thank you for your feedback.</p>
						<hr />
						<button onClick={this.send} className="btn btn-info float-right">
							No Problem!
						</button>
					</ModalBody>
				</Modal>
			</div>
		);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>Contact Us</h2>
						<hr />
					</div>
				</div>

				<div className="row align-items-center">
					<div className="col-sm-7">
						<h5>Our Address</h5>
						<address>
							1234 Library St.
							<br />
							Detroit, MI
							<br />
							48226
						</address>
						<iframe
							title="map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.3834731676316!2d-83.04846958445579!3d42.33434697918864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d2e19c99c03%3A0xa47347684f838a2d!2s1234%20Library%20St%2C%20Detroit%2C%20MI%2048226!5e0!3m2!1sen!2sus!4v1625348511557!5m2!1sen!2sus"
							width="100%"
							height="100%"
							allowfullscreen=""
							loading="lazy"
						></iframe>
					</div>
					<div className="col">
						<a role="button" className="btn btn-link" href="tel:+12065551234">
							<i className="fa fa-phone" /> 313-123-4567
						</a>
						<br />
						<a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co">
							<i className="fa fa-envelope-o" /> contact@dgw.com
						</a>
					</div>
				</div>
				<div className="row row-content">
					<div className="col-12">
						<h2>Send us your Feedback</h2>
						<hr />
					</div>
					<div className="col-md-10">
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="name" md={2}>
									Name
								</Label>
								<Col md={10}>
									<Control.text
										model=".name"
										id="name"
										name="name"
										placeholder="Name"
										className="form-control"
										validators={{
											required,
											minLength: minLength(2),
										}}
									/>
									<Errors
										className="text-danger"
										model=".name"
										show="touched"
										component="div"
										messages={{
											required: 'Required',
											minLength: 'Must be at least 2 characters',
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="email" md={2}>
									Email
								</Label>
								<Col md={10}>
									<Control.text
										model=".email"
										id="email"
										name="email"
										placeholder="Email"
										className="form-control"
										validators={{
											required,
											validEmail,
										}}
									/>
									<Errors
										className="text-danger"
										model=".email"
										show="touched"
										component="div"
										messages={{
											required: 'Required',
											validEmail: 'Invalid email address',
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="feedback" md={2}>
									Your Feedback
								</Label>
								<Col md={10}>
									<Control.textarea model=".feedback" id="feedback" name="feedback" rows="12" className="form-control" />
								</Col>
							</Row>
							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="info">
										Send Feedback
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</div>
				</div>
				<div>{this.renderModal()}</div>
			</div>
		);
	}
}

export default Contact;
