import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

function About(props) {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h2>About Us</h2>
					<hr />
				</div>
			</div>
			<div className="row row-content">
				<div className="col-sm-6">
					<h3>Our Mission</h3>
					<p>
						At Dogs Gone Wild, we are passionate about making hot dogs better and bringing people in the community together. By working with farming partners we know and trust, we have
						been making our own custom brand of signature hot dogs for years, while supporting small business agriculture. All of our hot dogs are made with local, grass-pastured meat and
						free of the nitrates, preservatives and artificial ingredients found in most other hot dogs.
					</p>
					<p>
						Making hot dogs this way requires more work and skill, but we think it’s worth it. And trust you do too. Whether you find Dogs Gone Wild on the street at the food truck or
						visit our beautiful new restaurant on Library Street, we want you to know that we are doing our best to give you and your family the best. We hope that you enjoy your
						experience as much as we enjoy serving you.
					</p>
				</div>
				<div className="col-sm-6">
					<Card>
						<CardHeader className="text-white">
							<h3>Facts At a Glance</h3>
						</CardHeader>
						<CardBody>
							<dl className="row">
								<dt className="col-6">Founded</dt>
								<dd className="col-6">May 5, 2005</dd>
								<dt className="col-6">Hot Dogs Sold</dt>
								<dd className="col-6">2,312,185 as of {today}</dd>
								<dt className="col-6">Employees</dt>
								<dd className="col-6">3</dd>
							</dl>
						</CardBody>
					</Card>
				</div>
				<div className="col">
					<Card className="bg-light mt-3">
						<CardBody>
							<blockquote className="blockquote">
								<p className="mb-0">I just wanna lie on the beach and eat hot dogs from Dogs Gone Wild. That’s all I ever wanted.</p>
								<footer className="blockquote-footer">
									Kevin Malone, <cite title="Source Title">The Office</cite>
								</footer>
							</blockquote>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default About;
