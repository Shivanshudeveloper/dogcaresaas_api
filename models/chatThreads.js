const mongoose = require("mongoose");

const ChatThreadSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  messages: [
    {
      messageBody: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      authorId: {
        type: String,
        required: true,
      },
    },
  ],
});

const ChatThreads = mongoose.model("ChatThreads", ChatThreadSchema);
module.exports = ChatThreads;
