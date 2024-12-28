import "./PataNi.css";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PataNi = () => {
  useGSAP(() => {
    gsap.set(".compy-box", {
      opacity: 0,
      scale: 0,
    });
    gsap.to(".compy-box", {
      duration: 1.6,
      delay: 0.1,
      opacity: 1,
      scale: 1,
      transformOrigin: "top right",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".company-section",
        start: "top center",
        end: "center",
        markers: false,
      },
    });
  });
  return (
    <>
      {/* <!-- Company Start --> */}
      <section className="company-section white-bg position-relative overflow-hidden">
        <h2 className="Compsec_title text-center">company</h2>
        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph">
                  <p className="Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                    <NavLink className="Compsec_common-btn" to="/Contact" style={{textDecoration:"none",color:"white"}}>Contact US{" "}  <img
                    src="https://www.yudiz.com/codepen/interior-design/arrow-right.svg"
                    className="comp_img-fluid"
                    alt="Arrow"
                  /></NavLink>
                 
                
                
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\IMG-20241110-WA0051.jpg"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
            {/* <!-- col --> */}
          </div>
          {/* <!-- row --> */}
        </div>
      </section>
      {/* <!-- Company End --> */}
    </>
  );
};
export default PataNi;
