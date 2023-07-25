import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function InquiryMessage() {
  return (
    <div className="inquiry--wrapper">
      <div className="inquiry--block mn">
        <h5>Answers for all your questions, right away</h5>
        <p>
          I know you can have a lot of questions even before beginning your
          fitness journey. However, I’m here to answer all of them quickly, at
          no additional cost.
        </p>

        <span></span>

        <a href="" className="button button--secondary">
          Start Now
          <FiArrowUpRight className="icon" />
        </a>
      </div>
    </div>
  );
}

export default InquiryMessage;
