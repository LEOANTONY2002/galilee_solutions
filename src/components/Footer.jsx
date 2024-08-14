import React from "react";
import "./Footer.scss";
import { HashLink as Link } from "react-router-hash-link";

import Email from "../assets/icons/EmailFooter.png";
import Mobile from "../assets/icons/MobileFooter.png";
import Location from "../assets/icons/LocationFooter.png";
import Logo from "../assets/icons/logo.png";
import { contact } from "../content";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="name">
        <h1>GALILEE</h1>
        <h1>SOLUTIONS</h1>
      </div>
      <img src={Logo} alt="" />
      {/* <div style={{ flex: 1 }}></div> */}
      <div className="links">
        <div>
          <h3>ABOUT</h3>
          <Link to={"/about#vision"}>Vision</Link>
          <Link to={"/about#mission"}>Mission</Link>
          <Link to={"/about#core"}>Core Values</Link>
        </div>
        <div>
          <h3>SERVICES</h3>
          <Link to={"/service/software"}>Software Products</Link>
          <Link to={"/service/bio"}>Bio Medical Equipments</Link>
          <Link to={"/service/finance"}>Financial Services</Link>
        </div>
        <div>
          <h3>CONTACT</h3>
          <div>
            <img src={Location} alt="" />
            <div className="addr">
              <span>{contact?.address?.line1}</span>
              <span>{contact?.address?.line2}</span>
              <span>{contact?.address?.line3}</span>
              <span>{contact?.address?.line4}</span>
              <span>{contact?.address?.line5}</span>
            </div>
          </div>
          <div>
            <img src={Email} alt="" />
            <span>email@gmail.com</span>
          </div>
          <div>
            <img src={Mobile} alt="" />
            <span>
              +91 9443179119<p>+91 9445948557</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
