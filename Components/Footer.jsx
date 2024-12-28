import "./Footer1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowLeft } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Map from "./map";
import Query from "./Query";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Footer1 = () => {
 
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  useGSAP(() => {
    // CS_Contact section - Box & Border
    gsap.set(".CS_contact-box, .CS_contact-border", {
      opacity: 0,
      scale: 0,
    });
    gsap.to(".CS_contact-box, .CS_contact-border", {
      duration: 1.6,
      opacity: 1,
      scale: 1,
      transformOrigin: "top right",
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".CS_contact-us",
        start: "top center",
        end: "bottom",
        markers: false,
      },
    });
  });
  return (
    <>
      <section className="CS_contact-us position-relative overflow-hidden">
        <div className="CS_container">
          <div className="row">
            <div className="col-md-5">
              <h4>DHAKAD ENGINEERING SERVICES</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <img
                    src="https://www.yudiz.com/codepen/interior-design/location.svg"
                    className="img-fluid"
                    alt="Location"
                  />
                  <a className="nav-link pe-none" href="#">
                    <h5> Plot No. 37 sector C</h5>
                    industrial area Mandideep district Raisen Bhopal M.P 462046
                  </a>
                </li>
                <li className="nav-item">
                  <img
                    src="https://www.yudiz.com/codepen/interior-design/email.svg"
                    className="img-fluid"
                    alt="Email"
                  />
                  <a
                    className="nav-link"
                    href="mailto:dhakad.engineering@gmail.com"
                  >
                    <h5>dhakad.engineering@gmail.com</h5>Email us for your query
                    or fill the below form
                  </a>
                </li>
                <li className="nav-item">
                  <img
                    src="https://www.yudiz.com/codepen/interior-design/call.svg"
                    className="img-fluid"
                    alt="Call"
                  />
                  <a className="nav-link" href="tel:9753448117">
                    <h5>+91 9753448117</h5>Monday to Saturday, 10AM to 6PM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Query
                      Submit={isSubmit}
                      setIsSubmit={setIsSubmit}
                      formErrors={formErrors}
                      setFormErrors={setFormErrors}
                      isSubmit={isSubmit}
                    ></Query>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-7">
              <div className="CS_contact-info">
                <div className="CS_contact-box"></div>
                <div className="CS_contact-border"></div>
                <h3>Follow Us !</h3>
                <h2 className="foot_h2">Feel free to reach out us</h2>
                <Map></Map>
                <p>
                  Please fill out the form if you have any questions and someone
                  will respond to you shortly. Thank You.
                </p>
                <a href="#" className="cs_common-btn">
                  <FaArrowLeft />
                  Fill the form
                </a>
              </div>

              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">
                  "THANKYOU" <br /> Your Query is successfully Submitted <br />{" "}
                  We will contact you soon.
                </div>
              ) : (
                <pre></pre>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer1;
