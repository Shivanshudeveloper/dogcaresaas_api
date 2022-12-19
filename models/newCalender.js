
const mongoose = require("mongoose");

const calenderSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true,
  },
  
  description:{
    type:String,
    required: true,
  },
allday:{
    type:Boolean,
    required:true
},
  startdate:{
    type:String,
    required: true,
  },
  enddate:{
    type:String,
    required: true,
  },
  adminEmail:{
    type:String,
    required: true,
  }
});

const calender = mongoose.model("calender", calenderSchema);
module.exports = calender;
