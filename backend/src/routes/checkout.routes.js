const { Router } = require("express");
const {
  authorizeTransaction,
} = require("../controllers/checkout.controllers.js");

const router = Router();

router.post("/checkout", authorizeTransaction);

module.exports = router;
