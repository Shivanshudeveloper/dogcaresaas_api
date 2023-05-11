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
// @desc    Update Buisness Details
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

module.exports = {
  addBusiness,
  getBusiness,
};
