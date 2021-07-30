import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Order from './OrderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, removeItem, addQuantity, subtractQuantity, addDelivery, subtractDelivery, resetState } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
	return {
		items: state.items,
		addedItems: state.addedItems,
		total: state.total,
		name: state.name,
		email: state.email,
		feedback: state.feedback,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => {
			dispatch(addToCart(id));
		},
		removeItem: (id) => {
			dispatch(removeItem(id));
		},
		addQuantity: (id) => {
			dispatch(addQuantity(id));
		},
		subtractQuantity: (id) => {
			dispatch(subtractQuantity(id));
		},
		addDelivery: () => {
			dispatch(addDelivery());
		},
		subtractDelivery: () => {
			dispatch(subtractDelivery());
		},
		resetState: () => {
			dispatch(resetState());
		},
	};
};

class Main extends Component {
	render() {
		const OrderPage = () => {
			return (
				<Order
					items={this.props.items}
					addedItems={this.props.addedItems}
					total={this.props.total}
					addToCart={this.props.addToCart}
					removeItem={this.props.removeItem}
					addQuantity={this.props.addQuantity}
					subtractQuantity={this.props.subtractQuantity}
					addDelivery={this.props.addDelivery}
					subtractDelivery={this.props.subtractDelivery}
					resetState={this.props.resetState}
				/>
			);
		};

		const ContactPage = () => {
			return <Contact name={this.props.name} email={this.props.email} feedback={this.props.feedback} resetState={this.props.resetState} />;
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={Home} />
					<Route exact path="/menu" render={() => <Menu hotdogs={this.props.items.filter((food) => food.food === true)} />} />
					<Route exact path="/order" component={OrderPage} />
					<Route exact path="/aboutus" component={About} />
					<Route exact path="/contactus" component={ContactPage} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
