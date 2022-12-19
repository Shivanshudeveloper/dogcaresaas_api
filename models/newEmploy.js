
const mongoose = require("mongoose");

const newEmploySchema = new mongoose.Schema({
  fullName:{
    type:String,
    required: true,
  },
  
  email:{
    type:String,
    required: true,
  },

  phone_number:{
    type:String,
    required: true,
  },
  address:{
    type:String,
    required: true,
  },
  bio:{
    type:String,
    required: true,
  },
  img:{
    type:String,
    required: true,
  },

  adminEmail:{
    type:String,
    required: true,
  }
});
const newEmploy = mongoose.model("newEmploy", newEmploySchema);
module.exports = newEmploy;
