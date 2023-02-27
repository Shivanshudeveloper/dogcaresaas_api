const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  product:{
    type: Object,
    required: true
  },
  productId: {
    type: String,
    required: true    
  },
  pets: {
    type: Array,
  },
  orderSubmitted: {
    type: Boolean,
    required: true
  },
  productId: {
    type: String,
    required: true    
  },
  status: {
    type:String,
    required: true
  },
  bookedForDate: {
    type: String,
  },
  bookedForMonth: {
    type: String,
  },
  bookedForYear: {
    type: String,
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  },
  rejectReason: {
    type: String,
  },
  reasonHeading: {
    type: String,
  },
});
const checkout = mongoose.model("checkout", checkoutSchema);
module.exports = checkout;
