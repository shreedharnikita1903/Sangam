import React from 'react'
import Training  from './img/Training Services.png'
import Training1  from './img/IT services 2.png' 
import Training2  from './img/HR services.png'
import Training3  from './img/Products.png'
import { Link } from 'react-router-dom'
function Services() {
  return (
	<div>
	  <>

  <section id="services" className="text-center py-5 text-light">
    <div className="inner-overlay">
      <div className="container">
        <div className="row">
          <div className="col mt-5 pt-4">
            <h1 className="text-light">Our Offerings</h1>
            <p className="lead">
              "Minimizing downtime and maximizing productivity for all users."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section id="block-service" className="wrapper block-service">
    <div className="container">
      <div className="section-title-group">
        <br />
        <div className="divider">
          <span />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-center mx-5">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="icon-block-outer">
            <div className="post-content-inner">
              <div className="list-inner">
                <figure className="feature-image overlay">
                  <div className="image-container">
                    <Link hrefto="/Hr">
                      <img src={Training} alt="HR Services" />
                      <div className="text-overlay">
                        <h2 style={{ color: "#011b3d" }}>HR Services</h2>
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="icon-block-outer">
            <div className="post-content-inner">
              <div className="list-inner">
                <figure className="feature-image overlay">
                  <div className="image-container">
                    <Link to="/It">
                      <img src={Training1} alt="IT Services" />
                      <div className="text-overlay">
                        <h2 style={{ color: "#011b3d" }}>IT Services</h2>
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mx-5">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="icon-block-outer">
            <div className="post-content-inner">
              <div className="list-inner">
                <figure className="feature-image overlay">
                  <div className="image-container">
                    <Link to="/Training">
                      <img
                       src={Training2}
                        alt="Training Services"
                      />
                      <div className="text-overlay">
                        <h2 style={{ color: "#011b3d" }}>Training Services</h2>
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="icon-block-outer">
            <div className="post-content-inner">
              <div className="list-inner">
                <figure className="feature-image overlay">
                  <div className="image-container">
                    <Link to="/Product">
                      <img src={Training3}alt="Products" />
                      <div className="text-overlay">
                        <h2 style={{ textAlign: "center", color: "#011b3d" }}>
                          Products
                        </h2>
                      </div>
                    </Link>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</>

	</div>
  )
}

export default Services



