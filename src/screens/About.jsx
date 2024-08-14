import React from "react";
import "./About.scss";

import BG from "../assets/images/aboutBG.png";
import BG2 from "../assets/images/aboutBG2.png";
import Vision from "../assets/images/vision.png";

import { useWindowWidth } from "@react-hook/window-size";
import { about } from "../content";

const About = () => {
  const width = useWindowWidth();

  return (
    <section className="About">
      <div className="banner">
        {width > 600 && <img src={BG} alt="" />}
        <div>
          <img src={BG2} alt="" />
          <div className="clr"></div>
          <div className="title">
            <div>
              <h4>Know more</h4>
              <h1>
                About <span>Us</span>
              </h1>
            </div>
            <p></p>
          </div>
        </div>
      </div>

      <div className="bio">
        <span>Galilee Solutions</span> {about?.bio}
      </div>

      <div id="vision" className="vision">
        <div>
          <div>
            <h1>
              <span>OUR</span> VISION
            </h1>
            <h4>{about?.vision}</h4>
          </div>
          <img src={Vision} alt="" />
        </div>
      </div>

      <div id="mission" className="mission">
        <h1>
          <span>OUR</span> MISSION
        </h1>
        <p>{about?.mission}</p>
      </div>

      <div id="core" className="core">
        <h1>
          <span>CORE </span> VALUES
        </h1>
        <div className="values">
          {about?.coreValues?.map((cv) => (
            <div className="value" key={cv?.title}>
              <div className="title">
                <h2>{cv?.title}</h2>
                <div>
                  <img src={cv?.icon} alt="" />
                </div>
              </div>
              <p>{cv?.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="director">
        <div className="title">
          <div className="content">
            <h1>
              Director <span>Profile</span>
            </h1>
            <h4>
              <span>Director </span>
              {about?.director?.name}
            </h4>
            <div>
              <img src={about?.director?.icon} alt="" />
              <span>{about?.director?.location}</span>
            </div>
          </div>
          <div className="photo">
            <img src={about?.director?.photo} alt="" />
          </div>
        </div>
        <div className="pro">
          <div className="title">
            <span></span>
            <h1>{about?.director?.profession?.title}</h1>
          </div>
          <p>{about?.director?.profession?.desc}</p>
        </div>
        <div className="edu">
          <div className="title">
            <span></span>
            <h1>{about?.director?.education?.title}</h1>
          </div>
          <p>{about?.director?.education?.desc}</p>
        </div>
        <div className="career">
          <div className="title">
            <span></span>
            <h1>{about?.director?.career?.title}</h1>
          </div>
          <div className="desc">
            {about?.director?.career?.desc?.map((d) => (
              <div key={d?.title}>
                <h3>{d?.title}</h3>
                <p>{d?.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lead">
          <div className="title">
            <span></span>
            <h1>{about?.director?.leadership?.title}</h1>
          </div>
          <p>{about?.director?.leadership?.desc}</p>
        </div>
        <div className="vis">
          <div className="title">
            <span></span>
            <h1>{about?.director?.vision?.title}</h1>
          </div>
          <p>{about?.director?.vision?.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
