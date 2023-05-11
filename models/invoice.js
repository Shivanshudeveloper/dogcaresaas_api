const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  currency: {
    type: String,
    required: true,
  },
  customer: {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  issueDate: {
    type: Date,
    default: Date.now(),
  },
  paymentStatus: {
    type: String,
    requierd: true,
  },
  totalAmount: {
    type: Number,
    requied: true,
  },
});

const invoice = mongoose.model("invoice", invoiceSchema);
module.exports = invoice;
