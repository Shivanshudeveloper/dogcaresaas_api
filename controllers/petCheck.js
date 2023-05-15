const PetCheckSchema_Model = require("../models/petCheck");
const PetModel = require("../models/Pets");

// @route   Post api/v1/main/updatePetCheckData/:id
// @desc    Update Pet CheckIn and CheckOut data
// @access  Private
const updatePetCheckData = async (req, res) => {
  try {
    const petId = req.params.id.toString();
    const dataSend = req.body;

    if (dataSend.checkInStatus === "Checked In") {
      let petCheck = await PetCheckSchema_Model.findOneAndUpdate(
        { petId: petId },
        {
          $set: {
            checkedInday: dataSend.day,
            checkedInmonth: dataSend.month,
            checkedIndate: dataSend.date,
            checkedInyear: dataSend.year,
            checkedIntime: dataSend.time,
            checkedIntimeMeridiem: dataSend.timeMeridiem,
            checkInStatus: dataSend.checkInStatus,
            checkedOutday: "",
            checkedOutmonth: "",
            checkedOutdate: "",
            checkedOutyear: "",
            checkedOuttime: "",
            checkedOuttimeMeridiem: "",
          },
        },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      let pet = await PetModel.findByIdAndUpdate(
        { _id: petId },
        { checkinStatus: "Checked In" }
      );
      return res.status(200).json({ petCheck, pet });
    } else if (dataSend.checkInStatus === "Checked Out") {
      let petCheck = await PetCheckSchema_Model.findOneAndUpdate(
        { petId: petId },
        {
          $set: {
            checkInStatus: dataSend.checkInStatus,
            checkedOutday: dataSend.day,
            checkedOutmonth: dataSend.month,
            checkedOutdate: dataSend.date,
            checkedOutyear: dataSend.year,
            checkedOuttime: dataSend.time,
            checkedOuttimeMeridiem: dataSend.timeMeridiem,
          },
        }
      );
      let pet = await PetModel.findByIdAndUpdate(
        { _id: petId },
        { checkinStatus: "Checked Out" }
      );
      return res.status(200).json({ petCheck, pet });
    } else {
      console.log(
        "CheckInStatus is not defined correctly. (Checked In / Checked Out)"
      );
    }
  } catch (err) {
    console.error(err.message);
  }
};

const requestPetCheckIn = async (req, res) => {
  try {
    const id = req.params.id.toString();
    let petCheck = await PetCheckSchema_Model.findOneAndUpdate(
      { petId: id },
      {
        $set: {
          checkedInday: "",
          checkedInmonth: "",
          checkedIndate: "",
          checkedInyear: "",
          checkedIntime: "",
          checkedIntimeMeridiem: "",
          checkInStatus: "Awaiting",
          checkedOutday: "",
          checkedOutmonth: "",
          checkedOutdate: "",
          checkedOutyear: "",
          checkedOuttime: "",
          checkedOuttimeMeridiem: "",
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    let pet = await PetModel.findByIdAndUpdate(
      { _id: id },
      { checkinStatus: "Awaiting" }
    );
    return res.status(200).json({ petCheck, pet });
  } catch (err) {
    console.log(err);
  }
};

// // Add user organization data
// const addPetCheckData = async (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   const dataSend = req.body;
//   const petIds = req.body.petId;
//   console.log(petIds);

//   if (dataSend.checkInStatus === "Checked In") {
//     PetCheckSchema_Model.countDocuments({
//       customerName: dataSend.customerName,
//       customerEmail: dataSend.customerEmail,
//       checkedIndate: dataSend.date,
//       checkedInyear: dataSend.year,
//       checkedInmonth: dataSend.month,
//       checkInStatus: dataSend.checkInStatus,
//       orgId: dataSend.orgId,
//     }).then((count) => {
//       if (count === 0) {
//         // console.log(petIds.length)
//         // for (index = 0; index < petIds.length; index++) {
//         const newData = new PetCheckSchema_Model({
//           // checkedInloc: dataSend.loc,
//           // checkedIncountry: dataSend.country,
//           // checkedInstate: dataSend.state,
//           // checkedIncity: dataSend.city,
//           // checkedInpostal: dataSend.postal,
//           // checkedIntimezone: dataSend.timezone,
//           checkedInday: dataSend.day,
//           checkedInmonth: dataSend.month,
//           checkedIndate: dataSend.date,
//           checkedInyear: dataSend.year,
//           checkedIntime: dataSend.time,
//           checkedIntimeMeridiem: dataSend.timeMeridiem,
//           checkInStatus: dataSend.checkInStatus,
//           // checkedOutloc: '',
//           // checkedOutcountry: '',
//           // checkedOutstate: '',
//           // checkedOutcity: '',
//           // checkedOutpostal: '',
//           // checkedOuttimezone: '',
//           checkedOutday: "",
//           checkedOutmonth: "",
//           checkedOutdate: "",
//           checkedOutyear: "",
//           checkedOuttime: "",
//           checkedOuttimeMeridiem: "",
//           checkOutStatus: "",
//           // userId: dataSend.userId,
//           customerEmail: dataSend.customerEmail,
//           customerName: dataSend.customerName,
//           petId: petIds,
//           // userName: dataSend.userName,
//           // orgName: dataSend.orgName,
//           // orgId: dataSend.orgId,
//           // os: dataSend.os
//         });
//         newData
//           .save()
//           .then((data) => {
//             res.status(200).json({ status: true, data: "Added" });
//           })
//           .catch((err) => console.log(err));
//         // }
//       } else {
//         console.log("Already Added");
//       }
//     });
//   } else if (dataSend.checkInStatus === "Checked Out") {
//     PetCheckSchema_Model.countDocuments({
//       customerEmail: dataSend.customerEmail,
//       checkedIndate: dataSend.date,
//       checkedInyear: dataSend.year,
//       checkedInmonth: dataSend.month,
//       checkOutStatus: dataSend.checkInStatus,
//     }).then((count) => {
//       if (count === 0) {
//         PetCheckSchema_Model.updateOne(
//           {
//             customerEmail: dataSend.customerEmail,
//             checkedIndate: dataSend.date,
//             checkedInyear: dataSend.year,
//             checkedInmonth: dataSend.month,
//           },
//           {
//             $set: {
//               // checkedOutloc: dataSend.loc,
//               // checkedOutcountry: dataSend.country,
//               // checkedOutstate: dataSend.state,
//               // checkedOutcity: dataSend.city,
//               // checkedOutpostal: dataSend.postal,
//               // checkedOuttimezone: dataSend.timezone,
//               checkedOutday: dataSend.day,
//               checkedOutmonth: dataSend.month,
//               checkedOutdate: dataSend.date,
//               checkedOutyear: dataSend.year,
//               checkedOuttime: dataSend.time,
//               checkedOuttimeMeridiem: dataSend.timeMeridiem,
//               checkOutStatus: dataSend.checkInStatus,
//             },
//           }
//         )
//           .then((data) => {
//             res.status(200).json({ status: true, data: "Updated" });
//           })
//           .catch((err) => console.log(err));
//       } else {
//         console.log("Already Added");
//       }
//     });
//   }
// };

const getCheckedInPets = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { date, month, year } = req.params;
  PetCheckSchema_Model.find({
    checkedIndate: date,
    checkedInyear: year,
    checkedInmonth: month,
  })
    .then((data) => {
      console.log(data);
      res.status(200).json({ status: true, data });
    })
    .catch((err) => console.log(err));
};

// Get user daily status
const getPetDailyStatus = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { customerEmail, date, month, year } = req.params;
  PetCheckSchema_Model.findOne({
    customerEmail,
    checkedIndate: date,
    checkedInyear: year,
    checkedInmonth: month,
  })
    .then((data) => {
      if (data) {
        if (data.checkInStatus === "Checked Out") {
          res.status(200).json({ status: true, data: "Checked Out" });
        } else {
          res.status(200).json({ status: true, data: "Checked In" });
        }
      } else {
        res.status(200).json({ status: true, data: "Not Checked In" });
      }
    })
    .catch((err) => console.log(err));
};

module.exports = {
  // addPetCheckData,
  updatePetCheckData,
  getPetDailyStatus,
  getCheckedInPets,
  requestPetCheckIn,
};
