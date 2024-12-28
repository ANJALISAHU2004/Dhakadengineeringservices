import "./About.css";
import PataNi from "../Components/PataNi";
import Timeline from "../Components/timeline";
import Testimonial from "../Components/testimonial";

import Midbar from "../Components/Midbar";
import Counter from "../Components/counter";
// import HeroSection from "../components/HeroSection";
// import Services from "../Components/Services";
import Partner from "../Components/partner";
import FAQ from "../Components/FAQ";
import CoreValues from "../Components/CoreValues";
import AboutUsHeader from "../Components/AboutUsHeader";

const questions = [
  {
    id: 3,
    question: "why choose us?",
    answer:
      "We are renowned for providing high-quality services in various areas, specializing in MS (Mild Steel) and SS (Stainless Steel) fabrication and erection work. Our competitive pricing and commitment to quality make us a trusted choice for our clients.",
  },
  {
    id: 1,
    question: "What services do we offer?",
    answer:
      "Warehouse Sheds: Manufacturing high-quality, weather-resistant sheds." +
      "PEB Sheds: Pre-engineered buildings that provide large column-free areas." +
      "Dairy Sheds: Housing solutions for agricultural animals." +
      "Industrial Stairs: Safe and convenient access to upper levels or platforms." +
      "Construction Sites: Office facilities for site managers and storage.",
  },
  {
    id: 2,
    question: "What is a Pre-engineered Building (PEB)?",
    answer:
      "PEBs are buildings manufactured in factories using steel and then shipped to the site for assembly. They use built-up sections instead of conventional hot-rolled sections, providing large column-free areas ideal for various industries.",
  },

  {
    id: 4,
    question: "What types of industrial stairs do we offer?",
    answer:
      "We offer various types of industrial stairs, including Straight Stairs with a Central Landing, L-shaped Stairs, U-shaped Stairs, Winder Stairs, Spiral Stairs, Circular Stairs, Curved Stairs, Ladder Stairs, Split Staircase, Space-Saving Staircase, Floating Staircase, and Storage Staircase.",
  },
];

export default function About() {
  return (
    <>
      <Midbar></Midbar>
      <PataNi></PataNi>
      <AboutUsHeader></AboutUsHeader>

      <Timeline></Timeline>
      <CoreValues></CoreValues>
      {/* <OurCapabilities></OurCapabilities> */}
      <Testimonial></Testimonial>
      <Wwdbar></Wwdbar>
      <FAQ data={questions} />
      <Counter></Counter>
      <Partner></Partner>
      {/* <Services></Services> */}
    </>
  );
}

const Wwdbar = () => {
  return (
    <>
      <div className="bar">
        <div>
          <h2>Industrial & Engineering Solutions</h2>
        </div>
        <div>
          <p>
            Perfect Metal Structure excels in high-quality warehouse sheds and
            pre-engineered buildings with robust construction and weather
            resistance.
            <br /> DHAKAD ENGINEERING SERVICES offers comprehensive solutions,
            including dairy sheds, industrial stairs, and custom iron works,
            catering to diverse industrial and residential needs. <br />
          </p>
        </div>
      </div>
    </>
  );
};
const OurCapabilities = () => {
  return (
    <>
      <div className="OurCapab">
        <h2>Our Capabilities</h2>
        <div className="OurCapabdiv">
          <div className="OurCapabdiv2">
            <ul>
              <li>asfdghdfgh</li>
              <li>dfgjhghj</li>
              <li>cgvghjlghg</li>
            </ul>
          </div>

          <div className="OurCapabdiv2">
            <ul>
              <li>asfdghdfgh</li>
              <li>dfgjhghj</li>
              <li>cgvghjlghg</li>
            </ul>
          </div>

          <div className="OurCapabdiv2">
            <ul>
              <li>asfdghdfgh</li>
              <li>dfgjhghj</li>
              <li>cgvghjlghg</li>
            </ul>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
