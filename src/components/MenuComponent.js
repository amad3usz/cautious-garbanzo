import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, Badge, Button, CardBody, CardTitle, Modal, ModalHeader, ModalBody } from 'reactstrap';

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

				// <Card>
				// 	<CardImg top src={hotdog.image} alt={hotdog.name} />
				// 	<CardBody>
				// 		<CardTitle>{hotdog.name}</CardTitle>
				// 		<CardBody>{hotdog.description}</CardBody>
				// 	</CardBody>
				// </Card>
			);
		}
		return <div />;
	}
	render() {
		//this.state changed to this.props because data is now in a different file
		const menu = this.props.hotdogs.map((hotdog) => {
			return (
				<div key={hotdog.id} className="col-md-4">
					<span onClick={this.toggleModal}>
						<Card onClick={() => this.onHotdogSelect(hotdog)}>
							<CardImg width="100%" src={hotdog.image} alt={hotdog.name} />
							<CardImgOverlay>
								<CardTitle>{hotdog.name}</CardTitle>
							</CardImgOverlay>
						</Card>
					</span>

					{/* <div className="col-12 col-sm-4">
						<img className="align-self-start img-fluid" src={hotdog.image} alt={hotdog.name} />
					</div>
					<div className="col-12 col-sm-8">
						<h2>{hotdog.name}</h2>
						<p>{hotdog.description}</p>
						<h5>${hotdog.price}</h5>
					</div> */}
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5 m-1">{this.renderSelectedHotdog(this.state.selectedHotdog)}</div>
				</div>
				<div className="row">{menu}</div>
			</div>
		);
	}
}

export default Menu;
