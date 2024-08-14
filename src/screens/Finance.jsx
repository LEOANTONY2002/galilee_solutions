import React from "react";
import "./Finance.scss";

import BG from "../assets/images/financeBG.png";
import BG2 from "../assets/images/financeBG2.png";
import BGMobile from "../assets/images/financeBGMobile.png";
import Premier from "../assets/images/financePremier.png";

import { useWindowWidth } from "@react-hook/window-size";
import { finance } from "../content";

const Finance = () => {
  const width = useWindowWidth();

  return (
    <section className="Finance">
      <div className="banner">
        <img src={width > 600 ? BG : BGMobile} alt="" />
        <div className="content">
          <img src={BG2} alt="" />
          <div className="title">
            <h1>FINANCIAL</h1>
            <h4>SERVICES</h4>
          </div>
        </div>
      </div>

      <div className="premier">
        <div className="content">
          <h2>{finance?.premier?.title}</h2>
          <span>{finance?.premier?.desc}</span>
        </div>
        <img src={Premier} alt="" />
      </div>

      <div className="aim">
        <div>
          <div className="title">
            <span>OUR</span>
            <h1>AIM</h1>
          </div>
          <h4>{finance?.aim}</h4>
        </div>
      </div>

      <p className="strive">
        <span>We </span>
        {finance?.strive}
      </p>

      <div id="core" className="core">
        <h1>
          <span>CORE </span> VALUES
        </h1>
        <div className="values">
          {finance?.coreValues?.map((cv) => (
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

export default Finance;
