import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './CartComponent';
import { addToCart } from '../redux/ActionCreators';

class Order extends Component {
	handleClick = (id) => {
		this.props.addToCart(id);
	};

	render() {
		let itemList = this.props.items.map((item) => {
			return (
				<div className="row" key={item.id}>
					<div className="media col">
						<img className="align-self-start mr-3 img-thumbnail" src={item.image} alt={item.name} />
						<div className="media-body">
							<p className="mt-0">
								<strong>{item.name}</strong>
							</p>
							<p className="d-none d-md-block">{item.description}</p>
							<p
								to="/"
								className="btn btn-info"
								onClick={() => {
									this.handleClick(item.id);
								}}
							>
								<i className="fa fa-shopping-cart" /> Add
							</p>
							<hr />
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>Order Online</h2>
						<hr />
						<div className="row">
							<div className="col col-md-8">{itemList}</div>
							<div className="col col-md-4">
								<Cart />
							</div>
						</div>
					</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Order);
