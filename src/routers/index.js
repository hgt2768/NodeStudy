const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "환영합니다.",
  });
});

module.exports = router;
