import "./timeline.css";
// import { ReactComponent as WorkIcon } from "./work.svg";
// import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements.js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { FaBuildingColumns } from "react-icons/fa6";
import { TbBuildingStadium } from "react-icons/tb";

export default function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <>
      <div>
        <h1 className="Time_title">Our Work</h1>
        {/* <Cards></Cards> */}
        <div className="Card_body_time">
          <VerticalTimeline>
            {timelineElements.map((element) => {
              let isWorkIcon = element.icon === "work";
              let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";

              return (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  // iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={
                    isWorkIcon ? (
                      <FaBuildingColumns style={{ color: "white" }} />
                    ) : (
                      <TbBuildingStadium style={{ color: "white" }} />
                    )
                  }
                >
                  <h3 className="Time_vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="Time_vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p id="Time_description">{element.description}</p>
                  {showButton && (
                    <a
                      className={`Time_button ${
                        isWorkIcon ? "Time_workButton" : "Time_schoolButton"
                      }`}
                      href="/"
                    >
                      {element.buttonText}
                    </a>
                  )}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>{" "}
      </div>
    </>
  );
}
const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <p className="card__exit">
            <i className="fas fa-times"></i>
          </p>
          <h2 className="card__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
