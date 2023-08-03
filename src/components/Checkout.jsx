import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Checkout() {
  const navigate = useNavigate();
  const [CheckoutToken, setCheckoutToken] = useState("Succesful");
  return (
    <div className="results--page">
      <h5>Your payment was {CheckoutToken}</h5>
      <h6>Your reference ID is: </h6>
      <button
        className="button button--return"
        onClick={() => navigate("/onlinecoaching")}
      >
        <AiOutlineArrowLeft className="icon" />
        Go Back to the Homepage
      </button>
    </div>
  );
}

export default Checkout;
