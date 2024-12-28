import "./Contact.css";

import FAQ from "../Components/FAQ";

export default function Contact() {
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
  return (
    <>
      <h2 className="Contact_Mdiv_h2">CONTACT US</h2>
      <div className="Contact_Mdiv">
        <div className="Contact_Mdivl">
          <p>
            <h3>We're Here to Help!</h3>
            <br />
            Thank you for your interest in Dhakkar Engineering Services. <br />{" "}
            We value your feedback and inquiries.
            <br /> Please feel free to reach out to us through any of the
            methods listed below.
            <br /> Our team is committed to providing you with exceptional
            service and prompt responses.
            <br />
            <h3>Business Hours</h3>
            <br />
            Monday - Friday: 9:00 AM - 6:00 PM <br />
            Saturday: 9:00 AM - 4:00 PM
            <br />
            Sunday: Closed
            <br />
            {/*Send Us A Message
If you have any questions, comments, or require further information, please fill out the form below. We look forward to hearing from you!
<br />
Your Name
<br />
Email Address
<br />
Phone Number
<br />
Subject
<br />
Your Message*/}
          </p>
        </div>

        <div className="Contact_Mdivr">
          {" "}
          <img src="Images\th (1).jpg" alt="contact_us" />
        </div>
      </div>

      <FAQ data={questions} />
    </>
  );
}
