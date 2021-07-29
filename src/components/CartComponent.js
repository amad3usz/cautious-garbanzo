import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const mapStateToProps = (state) => {
	return {
		addedItems: state.addedItems,
		total: state.total,
	};
};

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	handleRemove = (id) => {
		this.props.actions.removeItem(id);
	};

	handleAddQuantity = (id) => {
		this.props.actions.addQuantity(id);
	};

	handleSubtractQuantity = (id) => {
		this.props.actions.subtractQuantity(id);
	};

	// checkbox does not becomed checked, but delivery fee is continuously added (if add delivery function is commented out, it will check and uncheck, but subtract continuously instead)
	handleChecked = (e) => {
		if (e.target.checked) {
			this.props.actions.addDelivery();
		} else {
			this.props.actions.subtractDelivery();
		}
	};

	handleClick = () => {
		this.toggleModal();
	};

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	// unable to reset to initial state; not sure what to do here
	submitOrder = () => {
		this.props.actions.resetState();
		this.toggleModal();
	};

	renderModal() {
		return (
			<div>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Total</ModalHeader>
					<ModalBody>
						<p>Your total comes out to ${this.props.total.toFixed(2)}</p>
						<hr />
						<button onClick={this.submitOrder} className="btn btn-info btn-lg float-right">
							Submit Order!
						</button>
					</ModalBody>
				</Modal>
			</div>
		);
	}

	render() {
		let addedItems = this.props.items.length ? (
			this.props.items.map((item) => {
				return (
					<div className="text-center" key={item.id}>
						<span>{item.name}</span>
						<p>
							<b>Price: ${(item.price * item.quantity).toFixed(2)}</b>
						</p>
						<Link>
							<i
								className="fa fa-arrow-up"
								onClick={() => {
									this.handleAddQuantity(item.id);
								}}
							></i>
						</Link>
						<b> Quantity: {item.quantity} </b>
						<Link>
							<i
								className="fa fa-arrow-down"
								onClick={() => {
									this.handleSubtractQuantity(item.id);
								}}
							></i>
						</Link>
						<br />
						<button
							className="btn btn-danger btn-sm text-center"
							onClick={() => {
								this.handleRemove(item.id);
							}}
						>
							Remove
						</button>

						<hr />
					</div>
				);
			})
		) : (
			<p>Nothing.</p>
		);

		return (
			<div className="container">
				<div className="cart">
					<h5>Your Order:</h5>
					<div>{addedItems}</div>
				</div>
				<div>
					<div className="container">
						<div>
							<label>
								<input type="checkbox" onChange={this.handleChecked} />
								<span> Get it Delivered! (+$6)</span>
							</label>
							<br />
							<b>Total: ${this.props.total.toFixed(2)}</b>
						</div>
						<div className="checkout">
							<button onClick={this.toggleModal} className="btn btn-info">
								Checkout
							</button>
						</div>
					</div>
				</div>
				<div>{this.renderModal()}</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Cart);
