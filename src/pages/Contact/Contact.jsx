import React from 'react'
import './Contact.css'




export default function Contact() {
  return (
    <main className="main-container-contact">
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
        <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12110.518187531512!2d-74.02657586832272!3d40.63805103170142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2454d91e6a92b%3A0xb116b81a00adab65!2s6209%205th%20Ave%2C%20Brooklyn%2C%20NY%2011220!5e0!3m2!1ses-419!2sus!4v1693265317516!5m2!1ses-419!2sus"
        width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
      </section>
    </main>
  );
}
