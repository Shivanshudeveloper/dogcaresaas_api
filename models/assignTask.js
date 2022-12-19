
const mongoose = require("mongoose");

const taskAssignSchema = new mongoose.Schema({
  task:{
    type:String,
    required: true,
  },
  
  user:{
    type:String,
    required: true,
  },

  loginnedEmail:{
    type:String,
    required: true,
  },
  loginnedId:{
    type:String,
    required: true,
  }
});
const taskAssign = mongoose.model("taskAssign", taskAssignSchema);
module.exports = taskAssign;
