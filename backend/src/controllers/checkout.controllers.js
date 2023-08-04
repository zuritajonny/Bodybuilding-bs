const axios = require("axios");

const authorizeTransaction = async (req, res) => {
  const { checkout_token } = req.body;
  try {
    const transactionId = await axios.post(
      process.env.API_URL,
      {
        checkout_token: checkout_token,
        order_id: "JKLM4321",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: process.env.PUBLIC_API_KEY,
          password: process.env.PRIVATE_API_KEY,
        },
      }
    );
    console.log(transactionId);
    res.status(200).json(transactionId);
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = {
  authorizeTransaction,
};
