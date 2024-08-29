import React from 'react'
import IT  from './img/IT services 2.png'
function It() {
  return (
	<div>
	  <>

  <section id="itservices" className="text-center py-5 text-light">
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
            <b>IT Services</b>
          </h1>
          <p className="lead"></p>
          <p>
            Delivering innovative IT solutions to both Indian and international
            clients, Subhanu IT Services stands at the forefront of the digital
            landscape. Our offerings include:
            <br />
            <b>
              <br />
              Consulting Services
            </b>
            Our talented candidates, on Subhanu rolls, contribute their
            expertise to client projects, ensuring top-notch consulting
            solutions.
            <br />
            <b>
              <br />
              Client Projects
            </b>
            From websites to application delivery, we excel in executing diverse
            client projects with precision and creativity.
            <br />
            <b>
              <br />
              Software Products
            </b>
            Explore our hosted applications, including Learning Management
            Systems (LMS) and applications for in-house usage. We pride
            ourselves on developing cutting-edge software products that redefine
            user experiences.
            <br />
            <b>
              <br />
              Offshore Development Services
            </b>
            Partner with Subhanu IT Services to establish and run development
            centers in India. Our offshore development services offer seamless
            collaboration with foreign clients, fostering innovation and
            efficiency.
            <br />
            <br />
            At Subhanu IT Services, we are dedicated to pushing boundaries,
            fostering collaboration, and delivering IT solutions that shape the
            future of digital excellence.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 align-self-center">
          <img src={IT} className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</>

	</div>
  )
}

export default It

