import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <footer class="footer-body">
			<div class="footer-box">
				<div class="footer-item">
					<div class="logo">
						<img src='' alt="image loading logo"/>
					</div>
					<div class="social-media-iconss">
						<ul>
							<li><Link to=""
									target="_blank" class="facebook-icon">
									<i class="fab fa-facebook-f"></i>
								</Link></li>
							<li><Link to="" target="_blank" class="social-icon">
									<i class="fab fa-linkedin-in"></i>
								</Link></li>
						</ul>
					</div>
				</div>
				<div class="footer-item">
					<ul>
						<h3><b>Quick links</b></h3>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/About">About</Link></li>
						<li><Link to="/Services">Offerings</Link></li>
						<li><Link to="/Contact">Contact</Link></li>
					</ul>
				</div>
				<div class="footer-item">
					<ul>
						<h3><b>Offerings</b></h3>
						<li><Link to="/Hr">HR Services</Link></li>
						<li><Link to="/It">IT Services</Link></li>
						<li><Link to="/Training">Training Services</Link></li>
						<li><Link to="/Product">Products</Link></li>
					</ul>
				</div>
				<div class="footer-item footer-box-3">
					<ul>
						<h3><b>Contact us</b></h3>
						<li>Subhanu Technologies & Solutions.</li>
						<li>50/7, Ground Floor, MSR Complex, 39th cross, </li>
						<li> 16th Main, 4th T block, Bengaluru-560041</li>
						<li>Email : info@.com</li>
						<li>Phone: +91 1234567890 </li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 98451 75710</li>
					</ul>
				</div>
			</div>
			<div class="last-footer">
				<p>Samgam Technologies© 2024 All Rights Reserved.</p>
			</div>
		</footer>
    </div>
  )
}

export default Footer
