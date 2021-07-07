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
import { Switch, Route, Redirect } from 'react-router-dom';
import { HOTDOGS } from '../shared/hotdogs';
import { BEVERAGES } from '../shared/beverages';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hotdogs: HOTDOGS,
			beverages: BEVERAGES,
		};
	}

	render() {
		const HomePage = () => {
			return <Home />;
		};

		const OrderPage = () => {
			return <Order beverage={this.state.beverages} hotdogs={this.state.hotdogs} />;
		};
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" render={() => <Menu hotdogs={this.state.hotdogs.filter((food) => food.food === true)} />} />
					<Route exact path="/order" component={OrderPage} />
					<Route exact path="/aboutus" component={About} />
					<Route exact path="/contactus" component={Contact} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
