
const mongoose = require("mongoose");

const newCheckoutbillSchema = new mongoose.Schema({
    fNamebill: {
        type: String,
        required: true
    },
    lNamebill: {
        type: String,
        required: true,
    },
    addressbill: {
        type: String,
        required: true,
    },
    address2bill: {
        type: String,
        required: true,

    },
    // isSame:{
    //     type:Boolean,
    //     required:true
    // },

    addressship: {
        type: String,
    },
    address2ship: {
        type: String,

    },
    orderProducts: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    totalAmount: {
        type: Number,
        default: true,
    }
    // adminEmail:{ 
    //     type:String,
    // required:true
    // }



});
const newCheckoutbill = mongoose.model("newCheckoutbill", newCheckoutbillSchema);
module.exports = newCheckoutbill;
