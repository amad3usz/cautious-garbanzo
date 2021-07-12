import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class Receipt extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	handleChecked = (e) => {
		if (e.target.checked) {
			this.props.addDelivery();
		} else {
			this.props.substractDelivery();
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

	renderTotal() {
		return (
			<div>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Total</ModalHeader>
					<ModalBody>
						<p>Your total comes out to ${this.props.total.toFixed(2)}</p>
						<hr />
						<button onClick={this.toggleModal} className="btn btn-info btn-lg float-right">
							Awesome!
						</button>
					</ModalBody>
				</Modal>
			</div>
		);
	}

	render() {
		return (
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
				<div>{this.renderTotal()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		addedItems: state.addedItems,
		total: state.total,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addDelivery: () => {
			dispatch({ type: 'ADD_DELIVERY' });
		},
		substractDelivery: () => {
			dispatch({ type: 'SUB_DELIVERY' });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
