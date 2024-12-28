import "./counter.css";
import { useState, useEffect, useRef } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

export default function Counter() {
  const [counterState, setCounterState] = useState(false);
  const counterRef = useRef(null);

  function onEnterViewport() {
    setCounterState(true);
  }

  function onExitViewport() {
    setCounterState(false);
  }

  return (
    <>
      <div className="containerStylesh1">
        <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
          <div ref={counterRef} className="udiv">
            <div className="udivtem">
              <h2 className="udivh2">
                {counterState && <CountUp end={765} duration={2.75} />}+
              </h2>
              <p className="udivp">Completed Project</p>
            </div>
            <div className="udivtem">
              <h2 className="udivh2">
                {counterState && <CountUp end={456} duration={2.75} />}+
              </h2>
              <p className="udivp">Happy Clients</p>
            </div>
            <div className="udivtem">
              <h2 className="udivh2">
                {counterState && <CountUp end={356} duration={2.75} />}
              </h2>
              <p className="udivp">Questions Answers</p>
            </div>
            <div className="udivtem">
              <h2 className="udivh2">
                {counterState && <CountUp end={15} duration={2.75} />}+
              </h2>
              <p className="udivp">Year of Experience</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}
