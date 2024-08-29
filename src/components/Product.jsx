
import React from 'react'
import p from './img/Products-1 (1).png'
function product() {
  return (
	<div>
	  <>

 

  <section id="productservices" className="text-center py-5 text-light">
    <div className="inner-overlay">
      <div className="container">
        <div className="row">
          <div className="col mt-5 pt-4">
            <p />
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <section id="info" className="py-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 justify-content-center text-left infoS">
          <h1 className="text-light">
            <b>Products</b>
          </h1>
          <p className="lead"></p>
          <p>
            At Subhanu Products, we focus on STEM Products, catering to diverse
            needs
            <br />
            <b>
              <br />
              STEM Products for Young learners:
            </b>
            <br />
            <br /> Our dedicated STEM product line is designed to make
            technology education accessible and engaging for children. Through
            innovative tools and resources, we simplify complex concepts,
            providing a dynamic learning experience for kids.
            <br />
            Join us in shaping the future of education and technology with
            Subhanu Products—where creativity meets functionality, and solutions
            are crafted to inspire and innovate.
            <br />
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 align-self-center">
          <img src={p} className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</>

	</div>
  )
}

export default product


