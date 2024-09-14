import React from 'react'
import Trainin  from './img/Training Services.png';
import { Link } from 'react-router-dom';
function Training() {
  return (
	<div>
	  <>

  <section id="trainingservices" className="text-center px-0 text-light">
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
            <b>Training Services</b>
          </h1>
          <p className="lead"></p>
          <p>
            <br /> Empowering individuals for success, Subhanu Training Services
            operates through two dynamic divisions:
            <br />
          </p>
          <div className="training">
            {/* <b>KiddyPi</b>
            <br />
            We Catering to students aged 6 to 16, KiddyPi is our division
            focused on STEM education.
            <br />
            <br /> We utilize tools such as programming, electronics, and
            robotics to ignite curiosity and foster Link love for STEM among young
            minds.
            <br />
            Visit{" "}
            <Link
              to=""
              style={{ visibility: "visible" }}
            >
              www.kiddypi.com
            </Link>{" "}
            to know more. */}
            <br />
            <br />
            <b>RAPIDD Academy</b>
            <br />
            We specialize in training job seekers and college students in
            cutting-edge technologies such as Python, DevOps, and web
            development. Our unique approach transforms individuals into
            versatile professionals, focusing on technical skills, soft skills,
            and hands-on projects.
            <br />
            <br />
            Our holistic training method focuses on six key areas: Technical
            Skills, Soft Skills, Industry Exposure, Personal Development,
            Software Delivery Practices, and Business Domain Expertise. We
            prepare our students for success in today's competitive job market
            by providing intensive training in these categories.
            <br />
            <br />
            Subhanu Training Services shares our commitment to empowering
            individuals in the rapidly changing technological landscape.
            Together, we aim to provide the skills needed to thrive in today's
            dynamic job market. Visit{" "}
            <Link to="">www.rapiddacademy.com</Link>{" "}
            to&nbsp;know&nbsp;more.
            <br />
            <br />
            Subhanu Training Services is committed to shaping future innovators
            and empowering individuals with the skills needed to thrive in the
            ever-evolving technological landscape.
            <br />
          </div>
          <br />
      
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 align-self-center">
          <img src={Trainin} className="img-fluid" />
        </div>
      </div>
    </div>
  </section>

</>

	</div>
  )
}

export default Training
