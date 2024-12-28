import "./Midbar.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Midbar(params) {
  useGSAP(() => {
    gsap.to("#bannerBigimg", {
      duration: 2,
      // y: 1200,
      yPercent: 150,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true,
    });

    gsap.to("#headingSmall", {
      delay: 1.2,
      opacity: 0,
    });
    gsap.to("#headingSmall", {
      delay: 2,
      left: "-100vw",
    });
    gsap.to("#headingSmall", {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1,
    });

    // Banner Small Text
    gsap.to("#headingText", {
      delay: 1.2,
      opacity: 0,
    });
    gsap.to("#headingText", {
      delay: 2,
      left: "-100vw",
    });
    gsap.to("#headingText", {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1,
    });
    // Company Section - Title
    gsap.set(".company-section .title, #compDescription", {
      opacity: 0,
      y: -200,
    });
    gsap.to(".company-section .title, #compDescription", {
      opacity: 1,
      y: 0,
      duration: 1,
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
      <section className="Midbar_banner overflow-hidden">
        <div className="container">
          <div className="Midbar_banner-box">
            {/* <h1 id="headingBig">$</h1> */}
            <div className="Midbar_div">
              <div className="animated-title">
                <div className="text-top">
                  <div>
                    <span>THINK</span>
                    <span>We Make It </span>
                  </div>
                </div>
                <div className="text-bottom">
                  <div>for You!</div>
                </div>
              </div>
            </div>
            <div className="row gx-0">
              <div className="col-md-6 col-xxl-7 ms-auto">
                <div className="banner-img" id="bannerBigimg">
                  <img
                    src="Images\ProjectImages2\p1.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Midbar;
