import "./project.css";
import Project_even from "./Project_even";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects(params) {
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
      {" "}
      <section className="company-section projects-section white-bg position-relative overflow-hidden">
        <h2 className="title text-center" style={{ padding: "5%" }}>
          Projects
        </h2>
        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    showcases a modern and innovative tiny home constructed from
                    a repurposed shipping container, blending seamlessly into
                    its serene, wooded surroundings. This stylish container home
                    epitomizes sustainable living, with a sleek black exterior
                    complemented by large glass windows and doors that allow
                    natural light to flood the interior. The home is elevated on
                    a wooden deck adorned with potted plants and modern railing,
                    emphasizing the seamless integration of indoor and outdoor
                    spaces.
                  </p>
                </div>
                <a href="#" className="Compsec_common-btn left-row">
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p1.jpg"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p2.jpg"
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
                    two-story structure made from repurposed shipping
                    containers, painted green and nestled in a forested area.
                    The lower container is placed horizontally on the ground,
                    while the upper container is positioned perpendicularly,
                    creating an overhang. The structure features large windows
                    and a balcony on the upper level, with a ladder and some
                    construction materials visible, indicating ongoing work.
                    This setup highlights sustainable and creative architectural
                    practices.
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="#"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>

        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    structure made of blue corrugated metal sheets situated in a
                    forested area. The structure appears to be elevated on
                    concrete or stone pillars, lifting it above the ground.
                    There are several open doorways and windows, and the
                    surrounding area is densely populated with trees and
                    vegetation. The structure seems to be in a natural, possibly
                    remote, location, which could make it interesting or
                    relevant for purposes such as eco-friendly living, research
                    stations, or nature retreats.
                  </p>
                </div>
                <a href="#" className="Compsec_common-btn left-row">
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p3.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p4.jpg"
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
                    blue mobile home or trailer with white trim. The structure
                    has two windows with white bars and an air conditioning unit
                    mounted on the side. The mobile home is elevated on wheels,
                    indicating it is designed to be moved. The roof has a white
                    railing, suggesting it might be used as a rooftop deck.
                    There are some trees and foliage in the background,
                    indicating an outdoor setting. There is also some equipment
                    and tools on the ground near the mobile home. This image is
                    interesting as it showcases a compact, portable living space
                    that can be transported to different locations. 😊🚐🏡
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="#"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>

        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    a two-story building with a red corrugated metal roof. The
                    upper floor has a balcony with several wooden chairs lined
                    up against the wall. There is a yellow water tank on the
                    roof. The lower floor has an open area with more wooden
                    chairs and tables, suggesting it might be a dining or
                    seating area. The building is surrounded by a
                    well-maintained lawn with some small trees and shrubs. In
                    the background, there are tall trees and a clear sky with
                    some clouds. The setting appears to be a peaceful outdoor
                    area, possibly a restaurant or a recreational facility.{" "}
                  </p>
                </div>
                <a href="#" className="Compsec_common-btn left-row">
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p5.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p6.png"
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
                    a modified shipping container that has been converted into a
                    small kiosk or food stand. The container has been painted
                    gray and features a serving counter with a wooden finish.
                    The front panel of the container has been opened upwards to
                    create an awning, and there is a counter extending outwards
                    for serving customers. The interior appears to be lined with
                    wood, and there are metal supports holding the awning in
                    place. The container is situated outdoors on a gravel
                    surface, with a metal fence and another container visible in
                    the background. This setup is interesting as it demonstrates
                    a creative and practical use of shipping containers for
                    small businesses or pop-up shops. If you need further
                    details or have any questions, feel free to ask! 😊🏪📦
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="#"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>

        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    a small, prefabricated structure or kiosk. The structure is
                    made of metal and has a corrugated design. It is painted
                    gray with red accents on the roof and base. The front of the
                    kiosk features a roll-up shutter door, which is currently
                    closed. The structure is elevated slightly off the ground on
                    concrete blocks. There is a logo or text in the bottom right
                    corner that reads "Maxim Prefab." The background includes
                    some trees and another building, suggesting that the kiosk
                    is located in an outdoor area, possibly a construction site
                    or a temporary setup.
                  </p>
                </div>
                <a href="#" className="Compsec_common-btn left-row">
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p7.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p8.png"
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
                    The image shows a gray shipping container that has been
                    converted into a food kiosk or a small shop. The container
                    has a large window on one side that opens upwards, supported
                    by hydraulic arms, revealing the interior which includes
                    hanging lights and what appears to be a counter or serving
                    area. The container is placed outdoors on a concrete
                    surface, with a building in the background and some greenery
                    to the right. There is also a pink structure visible in the
                    background to the left. This setup is interesting as it
                    demonstrates a creative and practical use of shipping
                    containers for commercial purposes. If you need further
                    details or have any questions, feel free to ask! 😊🏪📦
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="#"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>

        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    a modern, architecturally unique building constructed from
                    shipping containers. The building consists of multiple
                    stacked and arranged containers, featuring large glass
                    windows framed in green. The structure has a contemporary
                    design with clean lines, and a combination of horizontal and
                    vertical elements. The containers are painted in a dark
                    color, which contrasts with the bright green frames around
                    the windows. The building is situated in a dry, open area
                    with some vegetation and rocks in the background. This
                    innovative use of shipping containers highlights sustainable
                    and creative architectural practices, making for an
                    eye-catching and functional design. Let me know if there's
                    anything else you need! 😊📦🏡
                  </p>
                </div>
                <a href="#" className="Compsec_common-btn left-row">
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p9.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p10.png"
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
                    a small, prefabricated structure that appears to be a
                    portable cabin or office. The structure has a beige color
                    and features a flat roof with a slight pitch. There is a
                    door on the left side and a large window in the center. The
                    cabin is elevated slightly off the ground and has a small
                    porch area with railings around it. The ground around the
                    structure appears to be a construction site or an area with
                    debris. The background shows another similar structure and
                    some vegetation. a compact, modular building that can be
                    used for various purposes such as temporary offices,
                    guardhouses, or small living spaces.
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="#"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
      </section>
      {/* <!-- Company End --> */}
    </>
  );
}
