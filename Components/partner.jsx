import "./partner.css";
import { useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "react-scroll-trigger";

export default function Partner() {
  const boxRef = useRef(null);
  const onEnterViewport = () => {
    gsap.fromTo(
      boxRef.current,
      { x: 1000 },
      { x: 0, duration: 1, ease: "power3.out" }
    );
  };
  return (
    <>
      <ScrollTrigger onEnter={onEnterViewport}>
        <div className="Partner_cantainer">
          <h1 ref={boxRef} className="Partner_Heading">
            CONTRACTS
          </h1>
          <div ref={boxRef} className="Partners_card">
            <div className="Partner">
              <img src="Images\Partners\image.png" alt="NTPC" />
            </div>
            <div ref={boxRef} className="Partner">
              <img
                src="Images\Partners\image_copy.png"
                alt="DRDO TBRL RAMGARH"
              />
            </div>
            <div ref={boxRef} className="Partner">
              <img src="Images\Partners\image_copy_2.png" alt="VARDHMAN YARN" />
            </div>
            <div ref={boxRef} className="Partner">
              <img
                src="Images\Partners\image_copy_3.png"
                alt="CROMPTON GREAVES"
              />
            </div>
            <div ref={boxRef} className="Partner">
              <img src="Images\Partners\image_copy_4.png" alt="TRIDENT GROUP" />
            </div>
            <div ref={boxRef} className="Partner">
              <img
                src="Images\Partners\image_copy_5.png"
                alt="DILIP BUILDCON"
              />
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
