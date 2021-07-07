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
							{/* <iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.3834731676316!2d-83.04846958445579!3d42.33434697918864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d2e19c99c03%3A0xa47347684f838a2d!2s1234%20Library%20St%2C%20Detroit%2C%20MI%2048226!5e0!3m2!1sen!2sus!4v1625348511557!5m2!1sen!2sus"
								width="400"
								height="300"
								allowfullscreen=""
								loading="lazy"
							></iframe> */}
						</address>
						<a role="button" className="btn btn-link" href="tel:+12065551234">
							<i className="fa fa-phone" /> 313-123-4567
						</a>
						<br />
						<a role="button" className="btn btn-link" href="mailto:noone@nowhere.co">
							<i className="fa fa-envelope-o" /> contact@dgw.com
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
