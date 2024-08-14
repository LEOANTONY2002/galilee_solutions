import React from "react";
import "./Contact.scss";

import BG from "../assets/images/contactBG.png";
import MAP from "../assets/icons/world.png";

import { contact } from "../content";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="banner">
        <div>
          <h1>CONTACT</h1>
          <span className="flip">CONTACT</span>
        </div>
        <img src={BG} alt="" />
      </div>

      <div className="reach">
        <h1>Reach</h1>
        <h3>Us</h3>
      </div>

      <div className="links">
        {contact?.links?.map((link, index) => (
          <a key={index} href={link?.link}>
            <img src={link?.icon} alt="" />
          </a>
        ))}
      </div>

      <div className="address">
        <div className="map">
          <img src={MAP} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <img src={contact?.address?.icon} alt="" />
            <h2>{contact?.address?.title}</h2>
          </div>
          <div className="addr">
            <span>{contact?.address?.line1}</span>
            <span>{contact?.address?.line2}</span>
            <span>{contact?.address?.line3}</span>
            <span>{contact?.address?.line4}</span>
            <span>{contact?.address?.line5}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
