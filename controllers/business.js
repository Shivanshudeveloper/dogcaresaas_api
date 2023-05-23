const Business = require("../models/business");

// @route   Post api/v1/main/addBusiness
// @desc    Create a new Buisness or Update existing
// @access  Private
const addBusiness = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const {
    userId,
    name,
    email,
    address,
    telephoneNumber,
    documentUrls,
    profileImageUrl,
  } = req.body;

  const businessFields = {};
  businessFields.userId = userId;
  businessFields.name = name;
  businessFields.email = email;
  if (address) businessFields.address = address;
  if (telephoneNumber) businessFields.telephoneNumber = telephoneNumber;
  if (documentUrls) businessFields.documentUrls = documentUrls;
  if (profileImageUrl) businessFields.profileImageUrl = profileImageUrl;

  try {
    let business = await Business.findOneAndUpdate(
      { userId: userId },
      { $set: businessFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json(business);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   GET api/v1/main/getBusiness/:userId
// @desc    Get Buisness Details
// @access  Private
const getBusiness = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const business = await Business.findOne({ userId: req.params.userId });
    if (!business) {
      return res
        .status(400)
        .json({ msg: "There is no business for this user" });
    }
    res.json(business);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   PUT api/v1/main/addBusinessPaymentOptions/:userId
// @desc    Add Payment options for the business
// @access  Private
const addPaymentOptions = async (req, res) => {
  const userId = req.params.userId;
  Business.findOneAndUpdate(
    { userId: userId.toString() },
    {
      $set: { paymentOptions: req.body.paymentOptions },
    },
    function (err, data) {
      if (data) {
        console.log(data);
        res.status(200).json({ status: true, data });
      } else console.log(err);
    }
  );
};

module.exports = {
  addBusiness,
  getBusiness,
  addPaymentOptions,
};
