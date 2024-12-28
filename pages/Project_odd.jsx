import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Project_odd({ Pimg, Ptitle, Pdes }) {
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
    <>
      <section className="company-section projects-section white-bg position-relative overflow-hidden">
        <h2 className="title text-center">Projects</h2>
        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur ducimus esse reprehenderit ab quaerat adipisci,
                    quis facere cumque eligendi modi assumenda ipsa earum, nihil
                    necessitatibus, omnis debitis totam voluptate magnam aperiam
                    nesciunt sint numquam. Doloribus sunt similique, eius
                    expedita iste nobis laborum. Mollitia exercitationem aut,
                    quae voluptatum blanditiis voluptates laboriosam, velit
                    saepe ipsa obcaecati beatae, sequi quas voluptas amet
                    molestias necessitatibus iure illo distinctio ex soluta
                    tempore culpa animi nam! Tempore atque quaerat rerum
                    laboriosam soluta, nam maxime assumenda similique earum
                    veniam deleniti adipisci odit animi rem ducimus temporibus!
                    Excepturi quod vero numquam cumque totam quo perspiciatis
                    nemo, voluptas suscipit.
                  </p>
                </div>
                <a href="#" className="Compsec_common-btn left-row">
                  contact us for more
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\IMG-20241110-WA0051.jpg"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
