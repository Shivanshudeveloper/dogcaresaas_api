const mongoose = require("mongoose");

const petCheckSchema = new mongoose.Schema({
  checkedInday: {
    type: String,
    required: false,
  },
  checkedInmonth: {
    type: String,
    required: false,
  },
  checkedIndate: {
    type: String,
    required: false,
  },
  checkedInyear: {
    type: String,
    required: false,
  },
  checkedIntime: {
    type: String,
    required: false,
  },
  checkedIntimeMeridiem: {
    type: String,
    required: false,
  },
  checkInStatus: {
    type: String,
    required: false,
  },
  checkedOutday: {
    type: String,
    required: false,
  },
  checkedOutmonth: {
    type: String,
    required: false,
  },
  checkedOutdate: {
    type: String,
    required: false,
  },
  checkedOutyear: {
    type: String,
    required: false,
  },
  checkedOuttime: {
    type: String,
    required: false,
  },
  checkedOuttimeMeridiem: {
    type: String,
    required: false,
  },
  checkOutStatus: {
    type: String,
    required: false,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  petId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
const petCheck = mongoose.model("petCheck", petCheckSchema);
module.exports = petCheck;
