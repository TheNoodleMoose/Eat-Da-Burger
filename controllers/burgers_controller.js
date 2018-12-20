const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all(data => {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create("burger_name", req.body.burger_name, result => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `${req.params.id}`;
  console.log(`Condition, ${condition}`);
  burger.update("devoured", condition, result => {
    if (result.changeRows === 0) {
      return res.status(400).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
