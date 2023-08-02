import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function RedirectPage() {
  const navigate = useNavigate();
  return (
    <div className="redirect--block">
      <h1>Looks like you're lost</h1>
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

export default RedirectPage;
