import React from 'react';

function Home(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col offset">
					<div class="row row-content align-items-center">
						<div class="col-12 col-sm-4 order-sm-last col-md-3">
							<h3>Our Lipsmacking Culinary Creations</h3>
						</div>
						<div class="col com-sm order-sm-first col-md">
							<h2>
								Grilled Cheese Dog <span class="badge bg-danger">HOT</span>
							</h2>
							<p class="d-none d-sm-block">
								A unique combination of two classic favorites, the Grilled Cheese Dog is here to satisfy two cravings in one! It’s simply a hot dog sandwich with spices, shredded
								cheddar cheese, and green onions. Served with spicy homemade ketchup and fries.
							</p>
						</div>
					</div>
				</div>

				<div class="row row-content align-items-center">
					<div class="col-12 col-sm-4 col-md-3">
						<h3>This Month's Promotions</h3>
					</div>
					<div class="col">
						<h2>
							Hot Dog Thursday Buffet <span class="badge bg-success">NEW</span>
						</h2>
						<p class="d-none d-sm-block">Featuring every hot dog and side on the menu, made to order. All you can eat all for just $19.99 per person.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
