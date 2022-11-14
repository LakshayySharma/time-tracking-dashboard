import React from "react";
import "./Card.css";
import workIcon from "../images/icon-work.svg";
import playIcon from "../images/icon-play.svg";
import studyIcon from "../images/icon-study.svg";
import exerciseIcon from "../images/icon-exercise.svg";
import socialIcon from "../images/icon-social.svg";
import selfCareIcon from "../images/icon-self-care.svg";

const Card = (props) => {
  let bg = "";
  let img;
  let ptext;
  switch (props.tf) {
    case "daily":
      ptext = "Yesterday";
      break;
    case "weekly":
      ptext = "Last Week";
      break;
    case "monthly":
      ptext = "Last Month";
      break;
    default:
      ptext = "";
      break;
  }
  switch (props.data.title) {
    case "Work":
      bg = "hsl(15, 100%, 70%)";
      img = workIcon;
      break;
    case "Play":
      bg = "hsl(195, 74%, 62%)";
      img = playIcon;
      break;
    case "Study":
      bg = "hsl(348, 100%, 68%)";
      img = studyIcon;
      break;
    case "Exercise":
      bg = "hsl(145, 58%, 55%)";
      img = exerciseIcon;
      break;
    case "Social":
      bg = "hsl(264, 64%, 52%)";
      img = socialIcon;
      break;
    case "Self Care":
      bg = "hsl(43, 84%, 65%)";
      img = selfCareIcon;
      break;
    default:
      bg = "black";
      break;
  }
  return (
    <div className="card" style={{ backgroundColor: bg }}>
      <div className="card-image">
        <img src={img} alt="" />
      </div>

      <div className="card-content">
        <div className="card-menu">
          <p>{props.data.title}</p>
          <p>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fill-rule="evenodd"
              />
            </svg>
          </p>
        </div>
        <div className="card-body">
          {props.tf ? (
            <h1>{props.data.timeframes[props.tf].current}hrs</h1>
          ) : (
            <h1>20</h1>
          )}

          <p className="subtitle">
            {ptext} - {props.data.timeframes[props.tf].previous}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
