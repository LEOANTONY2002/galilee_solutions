import React, { useEffect, useState } from "react";
import "./Header.scss";

import Logo from "../assets/icons/logoFull.png";
import Menu from "../assets/icons/Menu.png";
import Close from "../assets/icons/Close.png";

import { Link, useLocation } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";

const Header = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [openService, setOpenService] = useState(false);

  const width = useWindowWidth();
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <section className="Header">
        {width > 600 ? (
          <section
            className={show ? "HeaderDesktop desktopShow" : "HeaderDesktop"}
          >
            <Link to={"/"} className="logo">
              <img src={Logo} alt="" />
            </Link>
            <div className="navs">
              <Link className={pathname === "/" && "active"} to={"/"}>
                Home
              </Link>
              <Link
                className={pathname.startsWith("/service") && "active"}
                onMouseEnter={() => setOpenService(true)}
                onMouseLeave={() => setOpenService(false)}
              >
                Services
              </Link>
              {openService && (
                <div
                  onMouseEnter={() => setOpenService(true)}
                  onMouseLeave={() => setOpenService(false)}
                  className="serv"
                >
                  <Link
                    className={pathname === "/service/software" && "active"}
                    to={"/service/software"}
                  >
                    Software Products
                  </Link>
                  <Link
                    className={pathname === "/service/bio" && "active"}
                    to={"/service/bio"}
                  >
                    Bio Medical Equipment
                  </Link>
                  <Link
                    className={pathname === "/service/finance" && "active"}
                    to={"/service/finance"}
                  >
                    Financial Solutions
                  </Link>
                </div>
              )}
              <Link className={pathname === "/about" && "active"} to={"/about"}>
                About
              </Link>
              <Link
                className={pathname === "/contact" && "active"}
                to={"/contact"}
              >
                Contact
              </Link>
            </div>
          </section>
        ) : (
          <section
            className={show ? "HeaderMobile mobileShow" : "HeaderMobile"}
          >
            <Link to={"/"} className="logo">
              <img src={Logo} alt="" />
            </Link>
            <div className="menu" onClick={() => setOpen(true)}>
              <img src={Menu} alt="" />
            </div>
            <div className={`navs-mobile ${open && "open"}`}>
              <div className="list">
                <div>
                  <Link className={pathname === "/" && "active"} to={"/"}>
                    Home
                  </Link>
                  <Link
                    style={{
                      fontWeight: "normal",
                      marginBottom: "5px",
                      marginTop: "0px",
                    }}
                    onClick={() => setOpenService(!openService)}
                  >
                    Services
                  </Link>
                  <div className="serv">
                    <Link
                      className={pathname === "/service/software" && "active"}
                      to={"/service/software"}
                    >
                      Software
                    </Link>
                    <Link
                      className={pathname === "/service/bio" && "active"}
                      to={"/service/bio"}
                    >
                      Bio Medical
                    </Link>
                    <Link
                      className={pathname === "/service/finance" && "active"}
                      to={"/service/finance"}
                    >
                      Finance
                    </Link>
                  </div>
                  <Link
                    className={pathname === "/about" && "active"}
                    to={"/about"}
                  >
                    About
                  </Link>
                  <Link
                    className={pathname === "/contact" && "active"}
                    to={"/contact"}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="close" onClick={() => setOpen(false)}>
                <img src={Close} alt="" />
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Header;
