const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurants");

router.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurants.find();
    res.json(restaurants);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/restaurants", async (req, res) => {
  const restaurants = new Restaurants({
    name: req.body.name,
    image: req.body.image,
    food_type: req.body.food_type,
    restaurant_type: req.body.restaurant_type,
    hours: req.body.hours,
    address: req.body.address,
    menu: req.body.menu,
  });
  try {
    const savedRestaurants = await restaurants.save();
    res.json(savedRestaurants);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/restaurants/:id", async (req, res) => {
  try {
    const restaurants = await Restaurants.findById(req.params.id);
    res.json(restaurants);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete a post

router.delete("/restaurants/:id", async (req, res) => {
  try {
    const removedRestaurants = await Restaurants.findByIdAndRemove({
      _id: req.params.id,
    });
    res.json(removedRestaurants);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update
router.patch("/restaurants/:id", async (req, res) => {
  try {
    const updatedRestaurants = await Restaurants.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.title } }
    );
    res.json(updatedRestaurants);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
