import React from "react";
import "./Software.scss";

import content from "../assets/images/softwareCircles.png";
import BG2 from "../assets/images/softwareBG2.png";
import BGMobile from "../assets/images/softwareBGMobile.png";

import { useWindowWidth } from "@react-hook/window-size";
import { services, software } from "../content";

const Software = () => {
  const width = useWindowWidth();

  return (
    <section className="Software">
      <div className="banner">
        <img src={width > 700 ? BG2 : BGMobile} alt="" />
        <h1>
          SOFTWARE <span>PRODUCTS</span>
        </h1>
      </div>

      <div className="content">
        <img src={content} alt="" />
        <h4>{software?.content}</h4>
      </div>

      <div className="services">
        {software?.services?.map((service, index) => (
          <div key={index} className="service">
            <div className="title">
              <h1>{index + 1}</h1>
              <h2>{service.title}</h2>
              <h4>{service?.subTitle}</h4>
            </div>
            <div className="lists">
              {service?.list?.map((l) => (
                <div key={l?.name} className="list">
                  <div>
                    <img src={l?.icon} alt="" />
                  </div>
                  <h4>{l.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div id="core" className="core">
        <h1>
          <span>CORE </span> VALUES
        </h1>
        <div className="values">
          {software?.coreValues?.map((cv) => (
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
    </section>
  );
};

export default Software;
