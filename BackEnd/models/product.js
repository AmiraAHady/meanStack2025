const mongoose = require("mongoose");

let productShema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String,
  price: Number,
  description: String,
  brand: String,
  model: String,
  color: String,
  category: String,
  discount: Number,
});

module.exports=mongoose.model('Product',productShema)
