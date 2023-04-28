const mongoose = require("mongoose");

const ReportCardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  petName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  notes: [
    {
      noteTitle: {
        type: String,
        required: true,
      },
      noteDescription: {
        type: String,
        required: true,
      },
    },
  ],
  avatarImagePath: {
    type: String,
  },
  lastNote: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ReportCard = mongoose.model("ReportCard", ReportCardSchema);
module.exports = ReportCard;
