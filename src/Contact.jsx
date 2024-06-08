import React from "react";
import Contact2 from "./Contact2";

function Contact() {
  return (
    <>
      <div className="contact">
        <h1>Get in touch</h1>
        <p>Use the form or any of the methods listed below to get in touch</p>
        <div className="inputs">
          <div className="input-text">
            <input type="text" placeholder="Your name" />
            <input type="number" placeholder="Your phone number" />
            <input type="email" placeholder="Your email" />
          </div>
          <textarea name="test" id="test">
            Your message
          </textarea>
          <button>Send message</button>
        </div>
      </div>
      <div className="prop">
        <Contact2
          icon={<i className="fas fa-phone"></i>}
          title="Phone"
          info="99865453"
        />
        <Contact2
          icon={<i className="fas fa-envelope"></i>}
          title="Email"
          info="peter_-05@hotmail.com"
        />
        <Contact2
          icon={<i className="fas fa-map-marker-alt"></i>}
          title="Address"
          info="Vietnam 500"
        />
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.8237375991703!2d4.8408674!3d45.75467949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5ad08a0917%3A0x7010934eb11913c!2sVietnam%20Store!5e0!3m2!1sen!2s!4v1717785441209!5m2!1sen!2s"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
