import React from "react";
import "./Home.scss";

import BG from "../assets/images/bg.png";
import BG2 from "../assets/images/bg2.png";
import bgSmall from "../assets/images/bgSmall.png";
import { useWindowWidth } from "@react-hook/window-size";
import { home, services } from "../content";
import { Link } from "react-router-dom";

function Home() {
  const width = useWindowWidth();

  return (
    <section className="Home">
      <section className="banner">
        {width > 1200 ? (
          <img src={BG} alt="" />
        ) : (
          <div>
            <img src={BG2} alt="" />
          </div>
        )}
        <div>
          <div>
            <h3>Exceeding Your</h3>
            <h1>
              Expec<span>tation</span>
            </h1>
            <Link to={"/contact"} className="btn">
              Contact Now
            </Link>
          </div>
          <span></span>
        </div>
      </section>

      <div className="welcome">
        <h1>Welcome</h1>
        <p>
          At <span>Galilee Solutions</span>, we are committed to driving
          innovation and excellence across various industries, including
          biomedical equipment, software products, and financial services. We
          strive to provide high-quality solutions that empower our clients and
          enhance their operational capabilities.
        </p>
        <div>
          <span></span>
          <Link to={"/about"} className="btn">
            About us
          </Link>
        </div>
      </div>

      <div className="services">
        <h1>
          <span>Our </span> Services
        </h1>
        <div>
          {services?.map((s) => (
            <div className="service">
              <div>
                <div className="icon">
                  <img src={s?.icon} alt="" />
                </div>
                <h4>{s?.title}</h4>
              </div>
              <p>{s?.content}</p>
              <Link className="btn" to={s?.link}>
                Know more
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="choose">
        <h1>
          <span>Why</span> Choose Us
        </h1>
        <p>{home?.choose}</p>
      </div>

      <div className="contact">
        <div className="content">
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>{home?.contact}</p>
        </div>
        <div className="us">
          <Link className="btn" to={"/contact"}>
            Contact Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
