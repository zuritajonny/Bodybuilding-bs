const express = require("express");
/* const stripe = require("stripe"); */
const app = express();

const stripe = require("stripe")(
  "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"
);

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: "usd",
  payment_method_types: ["card"],
});

app.get("/secret", async (req, res) => {
  const intent = // ... Fetch or create the PaymentIntent
    res.json({ client_secret: intent.client_secret });
  console.log(req, res);
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
