import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar dark color="success">
					<div className="container">
						<NavbarBrand href="/">Dogs Gone Wild</NavbarBrand>
					</div>
				</Navbar>
				<Menu />
			</div>
		);
	}
}

export default App;
