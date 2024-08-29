import React, { useState } from 'react';

function Contact() {
  // State to manage form fields and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to validate form fields
  const validate = () => {
    let formErrors = {};

    if (formData.name.length < 3) {
      formErrors.name = 'Name must be at least 3 characters long';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone)) {
      formErrors.phone = 'Please enter a 10-digit phone number';
    }

    if (formData.subject.trim() === '') {
      formErrors.subject = 'Subject is required';
    }

    if (formData.message.trim() === '') {
      formErrors.message = 'Message is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert('Form submitted successfully!');
      // You can handle form submission logic here, such as sending the data to the server
    }
  };

  // Function to clear the form
  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div>
      <section id="contact" className="text-center py-5 text-light">
        <div className="inner-overlay">
          <div className="container">
            <div className="row">
              <div className="col mt-5 pt-4">
                <h1 className="text-light">Contact Us</h1>
                <p>
                  "Reach Out, We're Here to Listen: Your Partner in Solving
                  Challenges and Making Progress."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1>
        <center>Reach out & say hello</center>
      </h1>
      <div className="container2">
        <div className="column">
          <form method="post" name="contactus" id="contactus" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              minLength={3}
              required
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <br />
            <br />
            <label htmlFor="phone">Phone Number</label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your number.."
              required
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </form>
        </div>
        <div className="column">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject.."
            required
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
          <br />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            required
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
          <input type="hidden" name="date" id="timestamp" defaultValue="" />
          <button type="submit" className="button-style">
            Submit
          </button>
          <input type="button" value="✕ Clear Form" onClick={clearForm} />
        </div>
      </div>

      {/* Contact Main Section Start */}
      <section className="py-5" id="contact-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12 col-xl-6">
              <div className="card">
                <div className="card-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.800300552875!2d77.58542497404967!3d12.920553015997518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1582933301ed%3A0x4aa39e318140b9d4!2sSubhanu%20Technologies%20and%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1709486059677!5m2!1sen!2sin"
                    width="100%"
                    height={293}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 col-xl-6">
              <div className="card w-100 h-100">
                <div className="card-body">
                  <h2 className="card-title m-0">
                    <center>Get In Touch</center>
                  </h2>
                  <p className="m-0 mb-2"></p>
                  <h3 className="card-title m-0">Email:</h3>
                  <p className="m-0 mb-2">info@.com</p>
                  <h3 className="card-title m-0">Address:</h3>
                  <p className="m-0 mb-2">
                    50/7, Ground
                  </p>
                  <h3 className="card-title m-0">Phone:</h3>
                  <p className="m-0 mb-2">
                    +91 1234567890
                    <br />
                    +91 1234567890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Main Section End */}
    </div>
  );
}

export default Contact;
