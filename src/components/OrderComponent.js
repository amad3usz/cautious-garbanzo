import React, { Component } from 'react';
import Cart from './CartComponent';
import { Badge } from 'reactstrap';

class Order extends Component {
	handleClick = (id) => {
		this.props.addToCart(id);
		console.log(this.props.delivery);
	};

	render() {
		let itemList = this.props.items.map((item) => {
			return (
				<div className="row" key={item.id}>
					<div className="media col">
						<img className="align-self-start mr-3 img-thumbnail" src={item.image} alt={item.name} />
						<div className="media-body">
							<p className="mt-0">
								<strong>{item.name}</strong> <Badge className="rounded-pill badge-info">${item.price}</Badge>
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

		const cartActions = {
			removeItem: this.props.removeItem,
			addQuantity: this.props.addQuantity,
			subtractQuantity: this.props.subtractQuantity,
			addDelivery: this.props.addDelivery,
			subtractDelivery: this.props.subtractDelivery,
			resetState: this.props.resetState,
		};

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>Order Online</h2>
						<hr />
						<div className="row">
							<div className="col col-md-8">{itemList}</div>
							<div className="col col-md-4">
								<Cart items={this.props.addedItems} delivery={this.props.delivery} actions={cartActions} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Order;
