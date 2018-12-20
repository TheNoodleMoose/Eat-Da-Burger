const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// This method grabs all the burgers and renders them on index.handlebars
router.get("/", (req, res) => {
  burger.all(data => {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// When a post method at the route /api/burgers comes through, we run the burger.create method
// We create and pass in the new burger_name from the request.
// We then send the json back to the page
router.post("/api/burgers", (req, res) => {
  burger.create("burger_name", req.body.burger_name, result => {
    res.json({ id: result.insertId });
  });
});

//When a put method at the route of /api/burgers/:id we grab the req.params.id and store
// It as id. We then run the the update method we created with the id we grabbed out.
router.put("/api/burgers/:id", (req, res) => {
  const id = `${req.params.id}`;
  console.log(`ID Of Burger: ${id}`);
  burger.update("devoured", id, result => {
    if (result.changeRows === 0) {
      return res.status(400).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export this module
module.exports = router;
