import "./App.css";
import Cards from "./Components/Cards";
import img from "./images/image-jeremy.png";
import { useState, useEffect } from "react";

function App() {
  const [timeFrame, settimeFrame] = useState("daily");
  useEffect(() => {
    console.log(timeFrame);
  });
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="profile-card">
            <div className="profile-main">
              <div className="prof">
                <div className="profile-img">
                  <img src={img} alt="" />
                </div>
                <div className="profile-content">
                  <p>Report for</p>
                  <h1 style={{ fontWeight: 500, color: "white" }}>
                    Jeremy Robson
                  </h1>
                </div>
              </div>
            </div>
            <div className="profile-menu">
              <p
                style={
                  timeFrame === "daily"
                    ? { color: "white" }
                    : { color: "var(--desaturated-blue)" }
                }
                onClick={(e) => settimeFrame("daily")}
              >
                Daily
              </p>
              <p
                style={
                  timeFrame === "weekly"
                    ? { color: "white" }
                    : { color: "var(--desaturated-blue)" }
                }
                onClick={(e) => settimeFrame("weekly")}
              >
                Weekly
              </p>
              <p
                style={
                  timeFrame === "monthly"
                    ? { color: "white" }
                    : { color: "var(--desaturated-blue)" }
                }
                onClick={(e) => settimeFrame("monthly")}
              >
                Monthly
              </p>
            </div>
          </div>
          <div className="tracker">
            <Cards tf={timeFrame} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
