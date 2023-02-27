
const mongoose = require("mongoose");

const newVaccinceSchema = new mongoose.Schema({
  vaccineName:{
    type:String,
    required: true,
  },
  
  petId:{
    type:String,
    required: true,
  },

  petName:{
    type:String,
    required: true,
  },

  customerName:{
    type:String,
    required: true,
  },

  code:{
    type:Number,
    required: true
  },

  customerEmail:{
    type:String,
    required: true,
  },
  adminEmail:{
    type:String,
    required: true,
  },
  vaccinationStatus:{
    type:String,
    required:true,
  },
  assignedDay: {
    type: String,
    required: false,
  },
  assignedMonth: {
    type: String,
    required: false,
  },
  assignedDate: {
    type: String,
    required: false,
  },
  assignedYear: {
    type: String,
    required: false,
  },
  assignedTime: {
    type: String,
    required: false,
  },
  assignedTimeMeridiem: {
    type: String,
    required: false,
  },
  vaccinatedDay: {
    type: String,
    required: false,
  },
  vaccinatedMonth: {
    type: String,
    required: false,
  },
  vaccinatedDate: {
    type: String,
    required: false,
  },
  vaccinatedYear: {
    type: String,
    required: false,
  },
  vaccinatedTime: {
    type: String,
    required: false,
  },
  vaccinatedTimeMeridiem: {
    type: String,
    required: false,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  expiryMonth: {
    type: String,
    required: true,
  },
  expiryYear: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: false,
  },
});
const newVaccine = mongoose.model("newVaccine", newVaccinceSchema);
module.exports = newVaccine;
