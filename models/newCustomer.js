
const mongoose = require("mongoose");

const newCustomerSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: true,
      }, 
      companyName:{
        type:String,
        required: true,
      },
  
  workEmail:{
    type:String,
    required: true,
  },
  phone_number:{
    type:String,
    required: true,
  },
  password:{
    type:String,
    required: true,
  },

  adminEmail:{
    type:String,
    required: true,
  }
 
});
const newCustomer = mongoose.model("newCustomer", newCustomerSchema);
module.exports = newCustomer;
