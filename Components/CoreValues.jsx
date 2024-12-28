import "./CoreValues.scss";

export default function CoreValues(params) {
  return (
    <>
      <div className="CoreValues">
        <h2 className="CoreValues_h2">CORE VAlUES</h2>
        <div className="CoreValues_main_div">
          <div className="card">
            <div className="ilustration">
              <lottie-player
                src=""
                background="white"
                speed="1"
                loop
                autoPlay
              ></lottie-player>
              <div
                style={{
                  background: "black",
                  width: "100%",
                  height: "250px",
                  border: "5px solid  #8da9c4",
                  borderRadius: "5%",
                }}
              >
                <img
                  src="Images\coustmer.png"
                  alt="ddgdfg"
                  background="white"
                  speed="1"
                  loop
                  autoPlay
                  style={{
                    background: "black",
                    width: "100%",
                    height: "250px",
                    borderRadius: "5%",
                  }}
                />
              </div>
            </div>
            <h3>Customer Focus</h3>
            <p>
              Prioritizing customer satisfaction by understanding their needs,
              maintaining open communication, and delivering on promises.
              Striving to exceed client expectations and build long-term
              relationships.
            </p>
            {/* <button><a href=""></a>Continue</button> */}
          </div>

          <div className="card">
            <div className="ilustration">
              <lottie-player
                src=""
                background="white"
                speed="1"
                loop
                autoPlay
              ></lottie-player>
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  border: "5px solid  #8da9c4",
                  borderRadius: "5%",
                }}
              >
                <img
                  src="Images\Quality.png"
                  alt="ddgdfg"
                  background="white"
                  speed="1"
                  loop
                  autoPlay
                  style={{
                    background: "black",
                    width: "100%",
                    height: "250px",
                    borderRadius: "5%",
                  }}
                />
              </div>
            </div>
            <h3>Quality</h3>
            <p>
              Committing to high standards of quality in every aspect of the
              construction process. This includes using premium materials,
              employing skilled labor, and implementing rigorous quality control
              measures.
            </p>
            {/* <button>Continue</button> */}
          </div>
          <div className="card">
            <div className="ilustration">
              <lottie-player
                src=""
                background="white"
                speed="1"
                loop
                autoPlay
              ></lottie-player>
              <div
                style={{
                  background: "black",
                  width: "100%",
                  height: "250px",
                  border: "5px solid  #8da9c4",
                  borderRadius: "5%",
                }}
              >
                <img
                  src="Images\Integrity.png"
                  alt="ddgdfg"
                  background="white"
                  speed="1"
                  loop
                  autoPlay
                  style={{
                    background: "black",
                    width: "100%",
                    height: "250px",
                    borderRadius: "5%",
                  }}
                />
              </div>
            </div>
            <h3>Integrity</h3>
            <p>
              Conducting business with honesty, transparency, and ethical
              behavior. Building trust with clients, partners, and employees
              through consistent and reliable actions.
            </p>
            {/* <button>Continue</button> */}
          </div>
        </div>{" "}
      </div>
    </>
  );
}
