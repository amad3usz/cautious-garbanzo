import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="row">
					<div className="col-6 col-sm-4 text-center">
						<h5>Links</h5>
						<ul className="list-unstyled">
							<li>
								<Link to="/home">Home</Link>
							</li>
							<li>
								<Link to="/menu">Menu</Link>
							</li>
							<li>
								<Link to="/order">Order</Link>
							</li>
							<li>
								<Link to="/aboutus">About Us</Link>
							</li>
							<li>
								<Link to="/contactus">Contact Us</Link>
							</li>
							<li>
								<Link to="/cart">Cart</Link>
							</li>
						</ul>
					</div>
					<div className="col-6 col-sm-4 text-center">
						<h5>Social</h5>
						<a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
							<i className="fa fa-instagram" />
						</a>{' '}
						<a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/">
							<i className="fa fa-facebook" />
						</a>{' '}
						<a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
							<i className="fa fa-twitter" />
						</a>{' '}
						<a className="btn btn-social-icon btn-google" href="http://youtube.com/">
							<i className="fa fa-youtube" />
						</a>
					</div>
					<div className="col-sm-4 text-center">
						<h5>Location</h5>
						<address>
							<a href="https://goo.gl/maps/KXVTqkHzvs8yiw6MA">
								<b>Detroit</b>
								<br />
								1234 Library St.
								<br />
								Detroit, MI
								<br />
								48226
							</a>
						</address>
						<a className="btn-link" href="tel:+12065551234">
							<i className="fa fa-phone" /> 313-123-4567
						</a>
						<br />
						<a className="btn-link" href="mailto:noone@nowhere.co">
							<i className="fa fa-envelope-o" /> contact@dgw.com
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
