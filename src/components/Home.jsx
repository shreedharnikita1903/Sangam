
  import React from 'react';
import h1 from './img/1.png'
import h2 from './img/2.png'
import h3 from './img/3.png'
import h4 from './img/4.png'
import h5 from './img/5.png'
import h6 from './img/6.png'
import man1 from './img/man.png'
import { Link } from 'react-router-dom';
import man2 from './img/human (1).png'
import aboutus1 from './img/aboutus1.png'
  const Home = () =>{



  return (
    <>
  <div>
    <section id="slider" className="bg-dark">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li className="active" data-slide-to={0} data-target="#myCarousel" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
          <li data-target="#myCarousel" data-slide-to={3} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item crs-img-1 active">
            <div className="container">
              <div className="carousel-caption pb-5 mb-5 text-left">
                <h2 className="primary-my-headers text-light">
                  Excellence in Consulting
                </h2>
                <p className="lead">
                  Subhanu excels in consulting, with expert consultants
                  delivering <br />
                  high-quality solutions tailored to diverse client needs.
                </p>
                <div className="align-right">
                  <Link to="/" className="btn btn-success">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item crs-img-2">
            <div className="container">
              <div className="carousel-caption mb-5 text-center">
                <h2 className="primary-my-headers text-light">
                  Empowering Future Generations
                </h2>
                <p>
                  We also empower with our KiddyPi and RAPIDD Academy activites.
                </p>
                <div className="align-right">
                  <Link to="/" className="btn btn-success">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item crs-img-3">
            <div className="container">
              <div className="carousel-caption pb-5 mb-5 text-left">
                <h2 className="primary-my-headers text-light">
                  Diverse Project <br />
                  Portfolio
                </h2>
                <p>
                  Our diverse project portfolio reflects our commitment to
                  excellence, innovation, <br />
                  and pushing technological boundaries.
                </p>
                <div className="align-right">
                  <Link to="/" className="btn btn-success">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item crs-img-4">
            <div className="container">
              <div className="carousel-caption pb-5 mb-5 text-left">
                <h2 className="text-light primary-my-headers">
                  Ethical and Responsible IT
                </h2>
                <p>
                  We ensure that our solutions are always ethical and
                  responsible.
                </p>
                <div className="align-right">
                  <Link to="/" className="btn btn-success">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="#myCarousel"
          className="carousel-control-prev"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </Link>
        <Link
          to="#myCarousel"
          className="carousel-control-next"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </Link>
      </div>
    </section>
 
    <section id="showcase">
      <div className="container">
        <br />
        <h2 style={{ textAlign: "center" }}>
          <b>Our Offerings</b>
        </h2>
        <div className="row py-5 text-center">
          <div className="col-lg-3 col-md-3">
            <i className="fas fa-handshake mb-3" />
            <h3>
              <b>HR Services</b>
            </h3>
            <p className="lead mt-2">
              {" "}
              We help businesses find the ideal employees by first understanding
              their needs, then sourcing qualified candidates, and finally
              providing training to ensure Link seamless fit.
            </p>
          </div>
          <div className="col-lg-3 col-md-3">
            <i className="fas fa-laptop-code mb-3" />
            <h3>
              <b>IT Services</b>
            </h3>
            <p className="lead mt-2">
              We offer Link range of services, including consulting, client project
              development, software products, and Offshore Development Centers
              (ODC).
            </p>
          </div>
          <div className="col-lg-3 col-md-3">
            <i className="fas fa-users mb-3" />
            <h3>
              <b>Training Services</b>
            </h3>
            <p className="lead mt-2">
              We offer STEM education for kids through KiddyPi and job training
              for professionals through RAPIDD Academy, equipping individuals
              with the technical skills they need.
            </p>
          </div>
          <div className="col-lg-3 col-md-3">
            <i className="fas fa-robot mb-3" />
            <h3>
              <b>Products</b>
            </h3>
            <p className="lead mt-2">
              We offer STEM-focused educational products designed to make
              technology learning fun and accessible for children.
            </p>
          </div>
        </div>
      </div>
    </section>
  
    <section id="get-started" className="text-center py-5 text-light">
      <div className="inner-overlay">
        <div className="container">
          <div className="row">
            <div className="col mt-5 pt-4 gC">
              <p className="lead">
                <i>
                  "Before you start some work, always ask yourself three
                  questions - Why am I doing it, What the results might be and
                  Will I be successful. Only when you think deeply and find
                  satisfactory answers to these questions, go ahead."
                </i>
              </p>
              <h3 className="text-light">
                <b>-Arthashastra&nbsp;&nbsp;</b>
              </h3>
              <p />
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <section id="info" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 justify-content-center text-left infoS">
            <h2>
              <b>About Us</b>
            </h2>
            <p className="lead">
              Subhanu strives to create Link collaborative and agile work
              environment where employees are encouraged to share ideas, tackle
              challenges, and uphold values. We prioritize finding the right
              talent to join our team, fostering Link community dedicated to
              ethical innovation.
            </p>
            <Link to="/About" className="btn btn-outline-dark">
              Read More
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 align-self-center">
            <img src={aboutus1} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>

    <section id="gallery1" className="py-5" uk-lightbox="">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h2 className="mb-0">
              {" "}
              <b>Feature Projects</b>
            </h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <Link to={h1} >
              <img src={h1} className="img-fluid" />
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <Link to={h2} >
              <img src={h2}  className="img-fluid" />
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <Link to={h3} >
              <img src={h3}  className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <Link to={h4} >
              <img src={h4} className="img-fluid" />
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <Link to={h5} >
              <img src={h5}  className="img-fluid" />
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <Link to={h6} >
              <img src={h6}  className="img-fluid" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
 
  <div className="container1">
    <div className="testimonial-slider swiper">
      <h1>
        <center>Testimonials</center>
      </h1>
      <div className="swiper-wrapper">
        <div className="swiper-slide testimonial-item">
          <div className="testimonial-card ">
            <img src={man1}  alt="Person 1" />
            <p>
              "Very good environment to work in, and highly skilled mentors to
              guide us for the internship. I would definitely recommend people
              take up an internship at Subhanu Technologies to enhance their
              skills in the industry."
            </p>
            <span>
              - Likith B Girish
              <br />
              Intern
            </span>
          </div>
        </div>
        <div className="swiper-slide testimonial-item">
          <div className="testimonial-card ">
            <img src={man2}  alt="Person 2" />
            <p>
              "I had an amazing internship experience at Subhanu Technologies .
              The team was incredibly supportive and provided valuable learning
              opportunities. I would definitely recommend it to anyone looking
              for an internship opportunity."
            </p>
            <span>
              - Aishwarya Murali
              <br />
              Intern
            </span>
          </div>
        </div>
        <div className="swiper-slide testimonial-item">
          <div className="testimonial-card ">
            <img src={man1}  alt="Person 3" />
            <p>
              "Great experience! I completed my internship in embedded systems
              here. Highly recommended place for first timers to start their
              internship."
            </p>
            <span>
              - Amogh
              <br />
              Intern
            </span>
          </div>
        </div>
        <div className="swiper-slide testimonial-item">
          <div className="testimonial-card ">
            <img src={man2}  alt="Person 4" />
            <p>
              "We had Link SDP conducted by this company in our college. They
              taught us ML using Raspberry Pi. The trainers are excellent. It
              was Link wonderful learning experience."
            </p>
            <span>
              - Hamsini
              <br />
              Intern
            </span>
          </div>
        </div>
      </div>
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
      <div className="swiper-pagination" />
    </div>
  </div>
</>
  )
  }
  export default Home

