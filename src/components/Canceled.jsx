import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Canceled() {
  const navigate = useNavigate();
  return (
    <div className="results--page">
      You canceled your order
      <button
        className="button button--return"
        onClick={() => navigate("/coaching")}
      >
        <AiOutlineArrowLeft className="icon" />
        Go Back to the Homepage
      </button>
    </div>
  );
}

export default Canceled;
