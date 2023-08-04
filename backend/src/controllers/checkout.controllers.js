const axios = require("axios");

const authorizeTransaction = async (req, res) => {
  const { checkout_token } = req.body;
  try {
    const transactionId = await axios.post(
      "https://sandbox.affirm.com/api/v1/transactions",
      {
        checkout_token: checkout_token,
        order_id: "JKLM4321",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: "VGOCPKS82RVITC0M",
          password: "DIZP6Ry7QJFSxydNhBPivKOs43ie2PJV",
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
