import "./Navbar.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import { useState } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
        <div className="container-lg">
          <a className="navbar-brand fw-bold" href="#">
            <div className="nav-link active" aria-current="page" href="#hero">
              <NavLink
                style={{ color: "#0b2545", textDecoration: "none" }}
                to="/"
              >
                {" "}
                DES
              </NavLink>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            // aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              console.log(menu);
              openMenu(!menu);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={menu ? "collapse" : " navbar-collapse"}
            id="navbarNav"
          >
            <ul className={"navbar-nav mx-auto"}>
              <li className="nav-item">
                <div
                  className="nav-link active"
                  aria-current="page"
                  href="#hero"
                >
                  <NavLink
                    style={{ color: "#0b2545", textDecoration: "none" }}
                    to="/Home"
                  >
                    {" "}
                    Home
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="#services">
                  <NavLink
                    style={{ color: "#0b2545", textDecoration: "none" }}
                    to="/About"
                    // className="nav-link"
                  >
                    {" "}
                    About
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="#about">
                  <NavLink
                    style={{ color: "#0b2545", textDecoration: "none" }}
                    to="/Projects"
                  >
                    {" "}
                    Projects
                  </NavLink>
                </div>
              </li>
            </ul>

            <div className="btn btn-outline-dark d-none d-lg-block">
              <NavLink
                style={{ color: "#0b2545", textDecoration: "none" }}
                to="/Contact"
              >
                {" "}
                Contact_Us
              </NavLink>{" "}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
