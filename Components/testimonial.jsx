import "./Testimonial.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Testimonial(params) {
  useGSAP(() => {
    // Testimonial section - Title
    gsap.set(".testimonial-section .title", {
      y: -200,
      opacity: 0,
    });
    gsap.to(".testimonial-section .title", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false,
      },
    });

    // Testimonial section - Left Content
    gsap.set(".left-row", {
      opacity: 0,
      xPercent: -100,
    });
    gsap.to(".left-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false,
      },
    });

    // Testimonial section - Right Content
    gsap.set(".right-row", {
      opacity: 0,
      xPercent: 100,
    });
    gsap.to(".right-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false,
      },
    });
  });

  return (
    <>
      <section className="testimonial-section white-bg position-relative overflow-hidden">
        <h2 className="title text-center">Testimonials</h2>
        <div className="container">
          <div className="row g-0 left-row">
            <div className="col-md-6">
              <div className="content border-end-0">
                <h3>VARDHMAN YARN</h3>
                <p>
                  ""Outstanding craftsmanship! Our Warehouse shed is top-notch,
                  and the team's dedication to quality is truly commendable. "
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img
                  src="Images\WareHouse1.png"
                  className="test_img-fluid"
                  alt="person"
                />
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
          <div className="row g-0 reverse-row right-row">
            <div className="col-md-6">
              <div className="img-box">
                <img
                  src="Images\WareHouse2.png"
                  className="test_img-fluid"
                  alt="person"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content border-start-0">
                <h3>CROMPTON GREAVES MANDIDEEP</h3>
                <p>
                  "Impressed with the Factory building shed! Exceptional
                  service, timely delivery, and a sturdy structure that exceeds
                  expectations. "
                </p>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
          <div className="row g-0 left-row">
            <div className="col-md-6">
              <div className="content border-end-0">
                <h3>NTPC LTD RAIGARH </h3>
                <p>
                  " Highly recommend their Industrial workshop shed. Reliable,
                  professional, and cost-effective solutions for our business
                  needs. "
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img
                  src="Images\WareHouse3.png"
                  className="test_img-fluid"
                  alt="person"
                />
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
          <div className="row g-0 reverse-row right-row">
            <div className="col-md-6">
              <div className="img-box">
                <img
                  style={{ background: "black" }}
                  src="Images\i3.jpg"
                  className="test_img-fluid"
                  alt="person"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content border-start-0">
                <h3>CROMPTON GREAVES MANDIDEEP</h3>
                <p>
                  "Impressed with the Factory building shed! Exceptional
                  service, timely delivery, and a sturdy structure that exceeds
                  expectations. "
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
