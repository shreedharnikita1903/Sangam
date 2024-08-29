import React from 'react'
import Aboutus from './img/About Us .png'
function About() {
  return (
	<div>
	  <>
 
  <section id="about" className="text-center py-5 text-light">
    <div className="inner-overlay">
      <div className="container">
        <div className="row">
          <div className="col mt-5 pt-4">
            <h1 className="text-light">About Us</h1>
            <p className="lead">
              We bridge the gap between Intern and Implementation , empowering
              your success with innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  <br />
  <br />
  {/* About Section End */}
  <div>
    <div id="content-wrapper">
      <div id="left">
        <img
          src={Aboutus}
          alt="Placeholder Image"
          width={35}
          height={35}
        />
        <div id="overlay">
          <h2>
            <b>Business depends on planning:</b>
          </h2>
          <p>
            {" "}
            Plans should be dynamic and adapt to growth and unforeseen needs.
          </p>
        </div>
      </div>
      <div id="right">
        <div className="collapsible">
          <h3 className="collapsible-title">
            1. We provide different services<span className="plus-icon">+</span>
          </h3>
          <div className="collapsible-content">
            <ul>
              <li> HR Services</li>
              <li> IT Services</li>
              <li> Training Services</li>
              <li> Products</li>
            </ul>
          </div>
        </div>
        <div className="collapsible">
          <h3 className="collapsible-title">
            2. Reasons to choose us<span className="plus-icon">+</span>
          </h3>
          <div className="collapsible-content">
            <p>
              <b>We work together:</b> Our company believes in teamwork and
              sharing ideas openly towards mutual benefits.
              <br />
              <b>We adapt quickly:</b> In a fast-changing tech <br />
              world, we stay flexible and respond to challenges in real-time.
              <br />
              <b>We do what's right:</b> Our solutions are not just innovative
              but also ethical and responsible.
              <br />
              <b>We value talent:</b> We attract and develop committed talent,
              creating a community of excellence.
            </p>
          </div>
        </div>
        <div className="collapsible">
          <h3 className="collapsible-title">
            3. Diverse Project Portfolio
            <span className="plus-icon">+</span>
          </h3>
          <div className="collapsible-content">
            <p>
              <b>Innovative Internal Products:</b>Subhanu has developed
              cutting-edge software products like Learning Management Systems
              (LMS), student assessment platforms, and various in-house
              applications, showcasing our commitment to innovation.
              <br />
              <b>Client-Centric Solutions:</b> Subhanu delivers customized
              projects in website development and application delivery, meeting
              the unique needs of our clients with tailored solutions.
              <br />
              <b>Excellence in Execution: </b> The company's dedication to
              excellence is evident in the high-quality solutions we offer, both
              internally and to our clients, reflecting our commitment to
              delivering impactful results.
              <br />
              <b>Diverse Service Offerings:</b> In addition to product
              development and client solutions, Subhanu also provides offshore
              development services and consulting, demonstrating our versatility
              and ability to cater to a wide range of project requirements.
            </p>
          </div>
        </div>
        <div className="collapsible">
          <h3 className="collapsible-title">
            4. How we work
            <span className="plus-icon">+</span>
          </h3>
          <div className="collapsible-content">
            <p>
              <b>Team Unity:</b> Valuing collaboration, open communication, and
              shared ideas. Every team member's input is cherished, fostering
              innovation and creating a supportive environment.Every stakeholder
              is considered
              <br />
              <b>Adaptive Agility:</b> We embrace an agile approach, swiftly
              adapting to the ever-changing tech landscape. Challenges are seen
              as opportunities for growth, driving us to continuously improve
              and stay ahead in the fast-paced world of technology.
              <br />
              <b>Culture of Growth:</b> Our culture is both challenging and
              motivating, encouraging our team to push the boundaries of
              innovation. We believe in daring to dream bigger and strive for
              excellence in everything we do.
              <br />
              <b>Investing in Talent:</b> We are committed to developing talent
              and excellence through mentorship and skill development programs.
              We nurture our team members, empowering them to reach their full
              potential and contribute to our shared success.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
</>

	</div>
  )
}

export default About
