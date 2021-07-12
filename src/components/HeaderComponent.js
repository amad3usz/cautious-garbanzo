import React, { Component } from 'react';
import { Navbar, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import dgwbacksplash from '../shared/dgwbacksplash.jpg';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			isNavOpen: false,
		};
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	render() {
		return (
			<React.Fragment>
				<Jumbotron style={{ backgroundImage: `url(${dgwbacksplash}`, backgroundSize: 'cover', backgroundPosition: 'center' }} fluid>
					<div className="container">
						<div className="row overlay-jumbo">
							<div className="jumbo col">
								<div className="container">
									<h1>Dogs Gone Wild</h1>
									<h2>Who let the dogs out?!</h2>
								</div>
							</div>
						</div>
					</div>
				</Jumbotron>
				<Navbar dark sticky="top" expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<i className="fa fa-home fa-lg" /> Home
									</NavLink>
								</NavItem>
							</Nav>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/menu">
										<i className="fa fa-list fa-lg" /> Menu
									</NavLink>
								</NavItem>
							</Nav>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/order">
										<i className="fa fa-bell fa-lg" /> Order
									</NavLink>
								</NavItem>
							</Nav>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/aboutus">
										<i className="fa fa-info fa-lg" /> About Us
									</NavLink>
								</NavItem>
							</Nav>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/contactus">
										<i className="fa fa-address-card fa-lg" /> Contact Us
									</NavLink>
								</NavItem>
							</Nav>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/cart">
										<i className="fa fa-shopping-cart fa-lg" /> Cart
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Header;
