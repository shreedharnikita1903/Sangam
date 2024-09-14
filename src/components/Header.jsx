import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-lg"
		uk-sticky="top:100; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
		<div class="container">
			<Link to="/" class="navbar-brand">
				<img src="img/subhanu%20nav.jpg" style={{width: '15' }} class="img-fluid p-10"
					/>
				<div class="ml-2 p-0  webT" id="logo-text-desktop" style={{ color: 'white' }}>Samgam Technologies </div>
				<div class="ml-2 p-0  webT" id="logo-text-mob" style={{ color: 'white' }}>Samgam Technologies</div>
			</Link>
			<button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navBar" style={{ border: '1px solid white' }}

				aria-expanded="false">
				<span class="navbar-toggler-icon navbar-toggler-right"></span>
			</button>
			<div class="collapse navbar-collapse" id="navBar">
				<ul class="navbar-nav  ml-auto ">
					<li class="nav-item ">
						<Link class="nav-link " to="/">Home</Link>
					</li>
					<li class="nav-item ">
						<Link class="nav-link" to="/About">About</Link>
					</li>
					<li class="nav-item ">
						<Link class="nav-link" to="/Services">Offerings</Link>
						<ul id="submenu">
						<li><Link to="/Hr">HR Services</Link></li>
						<li><Link to="/It">IT Services</Link></li>
						<li><Link to="Training">Training Services</Link></li>
						{/* <li><Link to="Product">Products</Link></li> */}
						</ul>
					</li>
					{/* <li class="nav-item  ">
						<Link class="nav-link" to="/Blog">Blog</Link>
					</li> */}
					<li class="nav-item ">
						<Link class="nav-link" to="/Contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    </div>
  )
}

export default Header
