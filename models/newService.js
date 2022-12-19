const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  template:{
    type:String,
    required:false,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  physical: {
    type: Boolean,
    required: true,
  },
  stock:{
    type: Boolean,
    required:true,
  },
  email: {
    type: String,
    required: true,
  },
});
const newService= mongoose.model("newService", ServiceSchema);
module.exports = newService;
