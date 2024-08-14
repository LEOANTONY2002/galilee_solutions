import React from "react";
import "./BioMedical.scss";

import BG from "../assets/images/bioBG.png";
import BGMobile from "../assets/images/bioBGMobile.png";
import { useWindowWidth } from "@react-hook/window-size";
import { bio } from "../content";

const BioMedical = () => {
  const width = useWindowWidth();

  return (
    <section className="Bio">
      {width > 450 ? (
        <div className="banner">
          <div className="left">
            <h1>BIO MEDICAL EQUIPMENTS</h1>
          </div>
          <div className="right">
            <img src={BG} alt="" />
          </div>
        </div>
      ) : (
        <div className="bannerMobile">
          <img src={BGMobile} alt="" />
        </div>
      )}

      {bio?.map((b) => (
        <div className="content" key={b?.title}>
          <p>{b?.content}</p>
          <div>
            <div
              className="image"
              style={{ backgroundImage: `url(${b?.image})` }}
            ></div>
            <h2>
              {b?.title} <span></span>{" "}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BioMedical;
