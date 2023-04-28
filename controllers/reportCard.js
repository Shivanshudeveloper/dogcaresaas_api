const ReportCard = require("../models/reportCard");
const Company_usersData = require("../models/User");

// @route   Get api/v1/main/getuserdata/:email
// @desc    Fetch current users userId
// @access  Private
const getUserId = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const email = req.params.email;
    const data = await Company_usersData.find({ email: email });
    res.json(data._id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   Post api/v1/main/addReport
// @desc    Create a report card
// @access  Private
const addReportCard = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const newReportCard = new ReportCard(req.body);
    const report = await newReportCard.save();
    res.json(report);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   Get api/v1/main/getReports/:userId
// @des     Fetch all report cards of a particular user
// @access Private
const getAllReports = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    let userId = req.params.userId;
    userId = userId.toString();
    const reports = await ReportCard.find({ userId: userId });
    res.json(reports);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   Get api/v1/main/getReport/:reportId
// @des     Fetch a particular report card
// @access Private
const getParticularReport = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const report = await ReportCard.findById(req.params.reportId);
    if (!report) {
      return res.status(404).json({ msg: "Report not Found" });
    }
    res.json(report);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getUserId,
  addReportCard,
  getAllReports,
  getParticularReport,
};
