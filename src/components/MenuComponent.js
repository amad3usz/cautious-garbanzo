import React, { Component } from 'react';

class Menu extends Component {
	constructor(props) {
		//not required for class component, except certain cases; takes in the argument props which stands for properties
		super(props); //don't have to use this.props = props because that happens in base component in parent class; will be the first line in constructor method; required
		this.state = {
			//state property holds object
			hotdogs: [
				{
					id: 0,
					name: 'Grilled Cheese Dog',
					description:
						'A combo of two favorites, the Grilled Cheese Dog is here to satisfy two cravings in one! It’s simply a hot dog sandwich with spices, shredded cheddar cheese, and green onions. Served with spicy homemade ketchup and fries.',
					price: 5.75,
					image: 'assets/images/cheese.jpg',
				},
				{
					id: 1,
					name: 'Jalapeño Popper Dog',
					description:
						'When you need a little heat with your meat, the Jalapeño Popper Dog comes to the rescue. It’s made up of a grilled hot dog, wrapped in American cheese, and jalapeños. Served with old-world styled mustard and fries.',
					price: 6.25,
					image: 'assets/images/jalapeno-popper.jpg',
				},
				{
					id: 2,
					name: 'Quesadogas',
					description:
						'A cheesy Tex-Mex mashup of your dreams, this is what happens when a quesadilla and hot dog come together in perfect harmony.  A combo of cheddar, Monterey Jack, jalapeño, green onions, and hot dogs wrapped up in a tortilla and grilled to perfection. Served with chive and sour cream guacamole and tortilla chips.',
					price: 8.25,
					image: 'assets/images/quesadogas.jpg',
				},
				{
					id: 3,
					name: 'Mac and Cheese Dogs',
					description:
						'For the Mac and Cheese lover, these dogs are gonna blow you away! These hot dogs are topped with our spicy Mac and cheese, bacon bits, and jalapeño. Served along wide with our southern BBQ sauce and seasoned fries.',
					price: 8.25,
					image: 'assets/images/mac-and-cheese.jpg',
				},
				{
					id: 4,
					name: 'Pickle Dogs',
					description:
						'No carbs? No problem! Our pickle dogs replace the buns with a juicy pickle slathered in cream cheese and mustard. Served with jicama fries seasoned with cayenne and garlic powder alongside some hot sriracha aioli.',
					price: 7.75,
					image: 'assets/images/pickle.jpg',
				},
				{
					id: 5,
					name: 'Pizza Dogs',
					description: 'Just when you thought you couldn’t get any meatier, BAM! These dogs are topped with mozzarella, marinara, and loads of pepperoni. Served with a Caesar side salad.',
					price: 9.25,
					image: 'assets/images/pizza.jpg',
				},
				{
					id: 6,
					name: 'Vegan Chicago Dogs',
					description:
						'All of your Chicago style hot dogs, without any of the meat! We use impossible dogs topped with cherry tomatoes, pickles, mustard, and shredded lettuce. Served with olive tapenade aioli and seasoned fries.',
					price: 9.25,
					image: 'assets/images/vegan.jpg',
				},
			],
		};
	}
	render() {
		const menu = this.state.hotdogs.map((hotdog) => {
			return (
				<div className="row">
					<div className="col-12 col-sm-4">
						<img className="align-self-start img-fluid" src={hotdog.image} alt={hotdog.name} />
					</div>
					<div className="col-12 col-sm-8">
						<h2>{hotdog.name}</h2>
						<p>{hotdog.description}</p>
						<h5>${hotdog.price}</h5>
					</div>
					<hr />
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">{menu}</div>
			</div>
		);
	}
}

export default Menu;
