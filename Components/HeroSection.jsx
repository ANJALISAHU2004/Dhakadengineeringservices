import "./HeroSection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./text.scss";
const HeroSection = () => {
  useGSAP(() => {
    // gsap.to("#bannerBigimg", {
    //   // duration: 2,
    //   // // y: 1200,
    //   // yPercent: 150,
    //   // ease: "power2.inOut",
    //   // yoyo: true,
    //   // repeat: 1,
    //   // repeatRefresh: true,
    // });
    // gsap.to("#headingBig", {
    //   duration: 1.5,
    //   scale: 2,
    //   delay: 0.5,
    //   transformOrigin: "top left",
    //   ease: "power2.inOut",
    //   yoyo: true,
    //   repeat: 1,
    //   repeatRefresh: true,
    // });
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
   
   

    

  });
  return (
    <>
      <div className="banner-text" >
              <h2 id="headingSmall" >
                Welcome to <br /> DES.
              </h2>
              <h3 id="headingText">
                Let’s bring your creative <br /> immagination to reality.
              </h3>
            </div>
     
    </>
  );
};
export default HeroSection;
