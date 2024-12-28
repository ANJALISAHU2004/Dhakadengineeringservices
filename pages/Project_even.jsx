import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Project_even({ Pimg, Ptitle, Pdes }) {
  useGSAP(() => {
    // Projects section - Title
    gsap.set(".projects-section .title", {
      y: -200,
      opacity: 0,
    });
    gsap.to(".projects-section .title", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false,
      },
    });

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
        trigger: ".Compsec_container",
        start: "top center end",
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
        trigger: ".Compsec_container",
        start: "top center",
        end: "center",
        markers: false,
      },
    });
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
        trigger: "S2.Compsec_container",
        start: "top center end",
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
        trigger: ".S2Compsec_container",
        start: "top center",
        end: "center",
        markers: false,
      },
    });
  });
  return (
    <section className="S2company-section S2projects-section white-bg position-relative overflow-hidden">
      <div className="S2Compsec_container">
        <div className="row align-items-stretch">
          {/* <!-- col --> */}
          <div className="col-md-6 left-row">
            <div className="compy-box mt-4 my-md-0 position-relative">
              <img
                src="Images\IMG-20241110-WA0051.jpg"
                className="comp_img-fluid"
                alt="Company"
              />
            </div>
          </div>
          {/* <!-- col --> */}
          <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
            <div className="py-lg-5" id="S2compDescription">
              <div className="pb-md-3 paragraph right-row">
                <p className="S2Compsec_p">
                  We are proud of our history, our esteemed faculty, and our
                  dedicated professionals, who, year after year, provide the
                  environment and support to help our students realize their
                  dreams.
                </p>
                <p className="S2Compsec_p">
                  Our company is renowned for providing high-quality services in
                  various areas. We have a team of skilled and dedicated
                  employees specializing in MS (Mild Steel) and SS (Stainless
                  Steel) fabrication and erection work. Our staff is
                  well-trained, ensuring timely service delivery tailored to
                  customer requirements. Additionally, our services are
                  competitively priced, and we are recognized for our commitment
                  to quality and meeting project deadlines. Our highly qualified
                  professionals employ the best tools and techniques to ensure
                  the perfection of our fabrication services. Clients appreciate
                  our work for its quality compliance and timely execution. We
                  aim to achieve maximum client satisfaction by effectively
                  delivering our services. Our dexterous workforce consistently
                  strives for efficient and timely service delivery.
                </p>
              </div>
              <div className="S2Compsec_common-btn_div">
                {" "}
                <a
                  href="#"
                  className="S2Compsec_common-btn S2common-btn left-row"
                >
                  contact us for more{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- row --> */}
      </div>
    </section>
  );
}
