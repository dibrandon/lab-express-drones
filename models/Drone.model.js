// Iteration #1
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: String,
     propellers: Number,
      maxSpeed: Number
})

const droneModel = mongoose.model("lab-express-drones", droneSchema);

module.exports = droneModel;
