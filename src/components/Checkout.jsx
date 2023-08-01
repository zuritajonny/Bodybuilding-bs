import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Checkout() {
  const navigate = useNavigate();
  const [CheckoutToken, setCheckoutToken] = useState("Succesful");
  return (
    <div className="results--page">
      <h2>Your payment was {CheckoutToken}</h2>
      <p>Your reference id is: </p>
      <button className="button button--return" onClick={() => navigate("/")}>
        <AiOutlineArrowLeft className="icon" />
        Go Back to the Homepage
      </button>
    </div>
  );
}

export default Checkout;
