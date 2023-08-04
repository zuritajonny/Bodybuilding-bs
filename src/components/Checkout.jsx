import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Checkout() {
  const navigate = useNavigate();
  const [CheckoutToken, setCheckoutToken] = useState("Succesful");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    const authorizeTransaction = async () => {
      const checkout_token = window.location.href.split("=").pop();
      const response = await axios.post("http://localhost:3001/api/checkout", {
        checkout_token,
      });
      console.log(response);
      setTransactionId(response.data.error);
    };
    authorizeTransaction();
  }, []);

  return (
    <div className="results--page">
      <h5>Your payment was {CheckoutToken}</h5>
      <h6>Your reference ID is: {transactionId}</h6>
      <button className="button button--return" onClick={() => navigate("/")}>
        <AiOutlineArrowLeft className="icon" />
        Go Back to the Homepage
      </button>
    </div>
  );
}

export default Checkout;
