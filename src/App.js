import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { HOTDOGS } from './shared/hotdogs';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hotdogs: HOTDOGS,
		};
	}

	render() {
		return (
			<div className="App">
				<Navbar dark color="success">
					<div className="container">
						<NavbarBrand href="/">Dogs Gone Wild</NavbarBrand>
					</div>
				</Navbar>
				<Menu hotdogs={this.state.hotdogs} />
			</div>
		);
	}
}

export default App;
