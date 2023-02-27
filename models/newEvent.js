const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    heading:{
        type:String,
        required: true,
    },
    article:{
        type:String,
        required: true,
    },
    created_day:{
        type:String,
        required: false,
    },
    created_date:{
        type:String,
        required: false,
    },
    created_month:{
        type:String,
        required: false,
    },
    created_year:{
        type:String,
        required: false,
    },
    created_time:{
        type:String,
        required: false,
    },
    created_timeMeridiem:{
        type:String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Events = mongoose.model("events", EventSchema);
module.exports = Events;
