import { NavLink } from "react-router-dom";
export default function Card({ pimg, pname, pdescription }) {
  return (
    <>
      <div className="CarBox">
        <div className=" ag-format-container">
          <div className="ag-courses_box">
            <article className="card1">
              <img
                className="card__background1"
                src={pimg}
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div className="card__content1 | flow1">
                <div className="card__content--container1 | flow1">
                  <h2 className="card__title1">{pname}</h2>
                  <p className="card__description1">{pdescription}</p>
                </div>
                <button className="card__button1">
                  <NavLink to={"/Projects"}> Read more</NavLink>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
