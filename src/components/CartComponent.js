import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, addQuantity, subtractQuantity } from '../redux/ActionCreators';
import Receipt from './Receipt';

class Cart extends Component {
	handleRemove = (id) => {
		this.props.removeItem(id);
	};

	handleAddQuantity = (id) => {
		this.props.addQuantity(id);
	};

	handleSubtractQuantity = (id) => {
		this.props.subtractQuantity(id);
	};

	render() {
		let addedItems = this.props.items.length ? (
			this.props.items.map((item) => {
				return (
					<div className="text-center" key={item.id}>
						<span>{item.name}</span>

						<p>
							<b>Price: ${item.price.toFixed(2)}</b>
							{/* * item.quantity */}
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
				<Receipt />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.addedItems,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (id) => {
			dispatch(removeItem(id));
		},
		addQuantity: (id) => {
			dispatch(addQuantity(id));
		},
		subtractQuantity: (id) => {
			dispatch(subtractQuantity(id));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
