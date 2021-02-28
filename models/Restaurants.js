const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // review: {
  //   type: Number,
  //   required: true,
  // },
  restaurant_type: {
    type: [String],
    required: true,
  },
  food_type: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  hours: {
    open: {
      type: String,
      required: true,
    },
    close: {
      type: String,
      required: true,
    },
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  menu: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);
