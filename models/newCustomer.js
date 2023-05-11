const mongoose = require("mongoose");

const newCustomerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  workEmail: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  adminEmail: {
    type: String,
    required: true,
  },

  basicDetails: {
    species: {
      type: String,
    },
    petName: {
      type: String,
    },
    breed: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
    },
    neutered: {
      type: String,
    },
    insured: {
      type: String,
    },
    policyNumber: {
      type: String,
    },
    microchip: {
      type: String,
    },
  },

  ownerInformation: {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    emailAddress: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    postalCode: {
      type: String,
    },
  },

  emergencyContact: {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    emailAddress: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    postalCode: {
      type: String,
    },
  },

  petFiles: {
    fileUrls: [{ type: String }],
    fleaTreatment: {
      type: String,
    },
    brandOfFleaTreatment: {
      type: String,
    },
    lastFleatreatment: {
      type: String,
    },
    tickTreatment: {
      type: String,
    },
    brandOfTickTreatment: {
      type: String,
    },
    lastTickTreatment: {
      type: String,
    },
    wormTreatment: {
      type: String,
    },
    brandOfWormTreatment: {
      type: String,
    },
    lastWormTreatment: {
      type: String,
    },
    coreVaccination: {
      type: String,
    },
    titreTested: {
      type: String,
    },
    nextDueVaccine: {
      type: Date,
    },
    kennelCough: {
      type: String,
    },
    nextKennelCoughDueVaccine: {
      type: Date,
    },
  },

  vetInformation: {
    practiceName: {
      type: String,
    },
    address: {
      type: String,
    },
    telephoneNumber: {
      type: String,
    },
  },

  reportCardIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ReportCard",
    },
  ],
});
const newCustomer = mongoose.model("newCustomer", newCustomerSchema);
module.exports = newCustomer;
