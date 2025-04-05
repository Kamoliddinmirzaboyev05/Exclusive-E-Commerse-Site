import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contactPage">
      <div className="container">
        <div className="pageWay">
          <p>Home</p>
          <p>/</p>
          <p className="activePage">Contact</p>
        </div>
        <div className="mainContent">
          <div className="leftData">
            <div className="leftDataTitle">
              <img src="/call.svg" alt="" />
              <h2>Call To Us</h2>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            <div className="hr"></div>
            <div className="leftDataTitle">
              <img src="/email.svg" alt="" />
              <h2>Write To US</h2>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
          <div className="rightForm">
            <form action="#">
              <div className="mainInputs">
                <input required placeholder="Your Name *" type="text" />
                <input required placeholder="Your Email *" type="email" />
                <input required placeholder="Your Name *" type="tel" />
              </div>
              <textarea required
                name="message"
                id="message"
                placeholder="Your Message"
              ></textarea>
              <div className="formButton">
                <button className="viewBtn">Send Massage</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
