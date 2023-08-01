import { useState } from "react";

function Checkout() {
  const [CheckoutToken, setCheckoutToken] = useState("Succesful");
  return (
    <div className="results--page">
      <h2>Your payment was {CheckoutToken}</h2>
    </div>
  );
}

export default Checkout;
