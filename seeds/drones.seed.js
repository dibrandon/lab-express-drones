// Iteration #1
const dronesArr = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  // direccion de la seed a mano en Drones
  const Drones = require("../models/Drone.model")

  //coneccion a la DB

  const mongoose = require("mongoose")

  mongoose
  .connect("mongodb://localhost:27017/drone")
  .then((response) => {
    console.log("BD arriba");

    return Drones.create(dronesArr);
  })
  .then((response) => {
    console.log("drones insertados en la DB: " + response.length);

    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });