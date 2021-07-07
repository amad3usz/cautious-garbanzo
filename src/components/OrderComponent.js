import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Collapse } from 'reactstrap';

class Order extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>Order Online</h2>
						<hr />
					</div>
				</div>
			</div>
		);
	}
}

export default Order;
