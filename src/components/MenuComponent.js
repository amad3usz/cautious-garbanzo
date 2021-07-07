import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, Badge, CardTitle, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Menu extends Component {
	constructor(props) {
		//not required for class component, except certain cases; takes in the argument props which stands for properties
		super(props); //don't have to use this.props = props because that happens in base component in parent class; will be the first line in constructor method - required
		this.state = {
			//state property holds object
			selectedHotdog: null,
			isModalOpen: false,
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	onHotdogSelect(hotdog) {
		this.setState({ selectedHotdog: hotdog });
	}

	renderSelectedHotdog(hotdog) {
		if (hotdog) {
			return (
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>
						{hotdog.name} <Badge className="rounded-pill bg-success">${hotdog.price}</Badge>
					</ModalHeader>
					<ModalBody>
						<img class="rounded mx-auto d-block" src={hotdog.image} alt={hotdog.name} />

						<ModalBody>
							<p>
								{hotdog.description}
								<hr />
								Quantity:
								<br />
							</p>
							<button type="button" class="btn btn-primary btn-lg float-right">
								Add to Cart
							</button>
						</ModalBody>
					</ModalBody>
				</Modal>
			);
		}
		return <div />;
	}
	render() {
		//this.state changed to this.props because data is now in a different file
		const menu = this.props.hotdogs.map((hotdog) => {
			return (
				<div key={hotdog.id} className="col-md-6 my-3">
					<span onClick={this.toggleModal}>
						<Card onClick={() => this.onHotdogSelect(hotdog)}>
							<CardImg width="100%" src={hotdog.image} alt={hotdog.name} />
							<CardImgOverlay>
								<CardTitle>{hotdog.name}</CardTitle>
							</CardImgOverlay>
						</Card>
					</span>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>Menu</h2>
						<hr />
						<div className="row">
							<div className="col-sm-6">
								<h3>How to View the Menu</h3>
								<p>
									Click on any image of your desired hot dog to learn more information about it. You also have the option of adding the hot dog to your cart from the pop-up for your
									online order.
								</p>
							</div>
							<div className="col-sm-6">
								<h3>Sides and Extras</h3>
								<p>Sides and extras are available from the order page. There you can see what is available.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div>{this.renderSelectedHotdog(this.state.selectedHotdog)}</div>
					</div>
					<div className="row">{menu}</div>
				</div>
			</div>
		);
	}
}

export default Menu;
