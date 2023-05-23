const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  telephoneNumber: {
    type: String,
  },
  documentUrls: [
    {
      type: String,
    },
  ],
  profileImageUrl: {
    type: String,
  },
  paymentOptions: {
    accountHolderName: {
      type: String,
    },
    bankAccountNumber: {
      type: String,
    },
    bankName: {
      type: String,
    },
    ifscCode: {
      type: String,
    },
    swiftCode: {
      type: String,
    },
  },
});

const Business = mongoose.model("Business", BusinessSchema);
module.exports = Business;
