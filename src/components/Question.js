import React from "react";
import "../styles/Question.css";
import Upvote from "../assets/arrow-up.svg";
import Downvote from "../assets/arrow-down.svg";

const Question = () => {
  return (
    <div className="Question__wrapper">
      <div className="Question__Votes">
        <button className="Question__Votes__Up arrow">
          <img src={Upvote} alt="up" />
        </button>
        <div className="Question__Votes__Score__Wrapper">
          <h1 className="Question__Votes__Score">0</h1>
        </div>
        <button className="Question__Votes__Down arrow">
          <img src={Downvote} alt="up" />
        </button>
      </div>
      <div className="Question__Heading&Details">
        <div className="Question__Heading__wrapper">
          <h1 className="Question__Heading">Placeholder</h1>
        </div>
        <div className="Question__Details__wrapper">
          <p className="Question__Details"></p>
        </div>
      </div>
    </div>
  );
};
export default Question;
