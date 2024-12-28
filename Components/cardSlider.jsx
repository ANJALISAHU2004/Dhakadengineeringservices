import "./cardSlider.css";
// import Projects from "../pages/Project";
import ProjectData from "../datafile/projectdata.js";
import timelineElements from "./timelineElements.js";
import Card from "./card.jsx";

export default function CardSlider() {
  return (
    <>
      <div>
        <h1 className="Heading_PROJECTS"> PROJECTS</h1>
      </div>
      <div className="CarBox">
        <div className=" ag-format-container">
          <div className="ag-courses_box">
            <div className="Card_body">
              {/* <div className="ag-courses_item"> */}
              {ProjectData.map((Project) => (
                <Card
                  key={Project.projectid}
                  pimg={Project.projectImage}
                  pname={Project.projectName}
                  pdescription={Project.projectDescription}
                ></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
