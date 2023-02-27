
const mongoose = require("mongoose");

const PetsSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
  },
  
  category:{
    type:String,
    required: true,
  },

  country:{
    type:String,
    required: true,
  },
  breed:{
    type:String,
    required: true,
  },
  testAddress:{
    type:String,
    required: true,
  },
  additionalInfo:{
    type:String,
    required: true,
  },
  // vaccine:[
  //   {
  //       name:String,
  //       status:String,
  //       expiryDate:String
  //   }
  // ],
  ownerId:{
    type:String,
    required: true,
  },
  ownerEmail:{
    type:String,
    required: true,
  },
  adminEmail:{
    type:String,
    required: true,
  },
  assessmentDone:{
    type:Boolean, 
    required: true,
  },
  img: {
    type:String,
  }
});

const Pets = mongoose.model("Pets", PetsSchema);
module.exports = Pets;
