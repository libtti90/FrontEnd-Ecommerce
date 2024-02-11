import React from 'react'
import './Contact.css'




export default function Contact() {
  return (
    <main className="main-container">
      <section className="section-contact">
        <div className="contact-form-container">
          <form className="contact-form" action="">
            <h1 className="contact-title">Register</h1>
            <div className="input-wrapper">
              <label className="contact-label" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="group"
                type="text"
                name="fullName"
                id="fullname"
                minLength="5"
                maxLength="80"
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="contact-label" htmlFor="email">
                Email
              </label>
              <input
                className="group"
                type="email"
                name="email"
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                minLength=""
                maxLength=""
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="contact-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="group"
                name="message"
                id="message"
                rows="4"
                minLength=""
                maxLength=""
              ></textarea>
            </div>
            <div className="input-wrapper">
              <label className="contact-label" htmlFor=""></label>
              <input className="submit" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
