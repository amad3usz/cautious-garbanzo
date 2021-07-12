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
import Cart from './CartComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../redux/ActionCreators';
import { HOTDOGS } from '../shared/hotdogs';

const mapStateToProps = (state) => {
	return {
		items: state.hotdogs,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => {
			dispatch(addToCart(id));
		},
	};
};

class Main extends Component {
	render() {
		const HomePage = () => {
			return <Home />;
		};

		const OrderPage = () => {
			return <Order items={this.props.items} />;
		};

		const CartPage = () => {
			return <Cart items={this.props.items} />;
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" render={() => <Menu hotdogs={HOTDOGS.filter((food) => food.food === true)} />} />
					<Route exact path="/order" component={OrderPage} />
					<Route exact path="/aboutus" component={About} />
					<Route exact path="/contactus" component={Contact} />
					<Route exact path="/cart" component={CartPage} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
