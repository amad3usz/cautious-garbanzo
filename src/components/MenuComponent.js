import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, Badge, CardTitle, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { addToCart } from '../redux/ActionCreators';
import { connect } from 'react-redux';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedHotdog: null,
			isModalOpen: false,
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	handleClick = (id) => {
		this.props.addToCart(id);
		this.toggleModal();
	};

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	onHotdogSelect(hotdog) {
		this.setState({ selectedHotdog: hotdog });
		this.toggleModal();
	}

	renderSelectedHotdog(hotdog) {
		if (hotdog) {
			return (
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>
						{hotdog.name} <Badge className="rounded-pill badge-info">${hotdog.price}</Badge>
					</ModalHeader>
					<ModalBody>
						<img className="rounded mx-auto d-block" src={hotdog.image} alt={hotdog.name} />
						<ModalBody>
							<p>{hotdog.description}</p>
							<hr />
							<button
								data-dismiss="modal"
								onClick={() => {
									this.handleClick(hotdog.id);
								}}
								to="/"
								type="button"
								className="btn btn-info btn-lg float-right "
							>
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
		const menu = this.props.hotdogs.map((hotdog) => {
			return (
				<div key={hotdog.id} className="col-md-6 my-3">
					<Card className="pointer" onClick={() => this.onHotdogSelect(hotdog)}>
						<CardImg width="100%" src={hotdog.image} alt={hotdog.name} />
						<CardImgOverlay>
							<CardTitle>{hotdog.name}</CardTitle>
						</CardImgOverlay>
					</Card>
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

const mapStateToProps = (state) => {
	return {
		items: state.items,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => {
			dispatch(addToCart(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
