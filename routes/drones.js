const express = require('express');
const router = express.Router();
const Drones = require("../models/Drone.model");


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drones.find()
  .then((response) => {
    console.log(response);
    res.render("drones/list.hbs", { response });
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
