const mongoose = require("mongoose");

const CustomerUpdateSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  adminEmail:{
    type: String,
    required: true
  },
  img: {
    type: String,
  },
  textUpdate: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const CustomerUpdate = mongoose.model("CustomerUpdate", CustomerUpdateSchema);
module.exports = CustomerUpdate;
