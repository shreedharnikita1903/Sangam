import React from 'react'
import services from './img/HR services.png'
function Hr() {
  return (

	  <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .image-container img {\n\t\t\ttransition: opacity 0.5s ease-in-out;\n\t\t  }\t  \n\t\t  .text-overlay {\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\tcolor: rgb(58, 25, 25);\n\t\t\tdisplay: flex; \n\t\t  justify-content: center; \n\t\t  align-items: center;\n\t\t\ttext-align: center;\n\t\t\topacity: 0;\n\t\t\ttransition: opacity 0.5s ease-in-out;\n\t\t  }\t\t  \n\t\t  .image-container:hover img {\n\t\t\topacity: 0.5;\n\t\t  }\t\t  \n\t\t  .image-container:hover .text-overlay {\n\t\t\topacity: 1;          \n\t\t  }\n          #info .infoS{\n            margin-top:70px;           \n        }\n        #info img{\n            border-radius: 5px;\n        }\n    "
    }}
  />

  <section id="hrservices" className="text-center py-5 text-light">
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
        <div className="col-lg-6 col-md-6 col-sm-6 justify-content-center text infoS">
          <div className="hr">
            <h1 className="text-dark">
              <b>HR Services</b>
            </h1>
            <p className="lead"></p>
            <p>
              Navigating the dynamic landscape of talent acquisition, Subhanu HR
              Services offers a comprehensive suite of solutions:
              <br />
              <b>
                <br />
                Client Job Requirements
              </b>
              <br />
              We collaborate closely with clients to understand their job
              requirements, ensuring a tailored and efficient search for the
              perfect candidates.
              <br />
              <b>
                <br />
                Candidates from Job Portals
              </b>
              <br />
              Leveraging our extensive network, we source and match candidates
              from top job portals, providing clients with a diverse pool of
              talent to choose from.
              <br />
              <b>
                <br />
                Trained Candidates
              </b>
              <br />
              Our commitment to excellence extends to training candidates at
              Subhanu, ensuring they meet industry standards and are ready to
              seamlessly integrate into client requirements.
              <br />
              <br /> At Subhanu HR Services, we redefine talent acquisition by
              combining precision, innovation, and a commitment to delivering
              candidates that not only meet but exceed client expectations.
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-6 align-self-center"
          id="hrimg"
        >
          <img src={services} className="img-fluid" />
        </div>
      </div>
    </div>
  </section>

</>


  )
}

export default Hr
