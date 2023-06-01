const chatThreads = require("../models/chatThreads");

// @route   Post api/v1/main/addChatThread
// @desc    Create a new chat Thread
// @access  Private
const addThread = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { adminId, customerId } = req.body;

  const threadFields = {};
  threadFields.adminId = adminId;
  threadFields.customerId = customerId;
  try {
    const newThread = new chatThreads(threadFields);
    const thread = await newThread.save();
    return res.json(thread);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   GET api/v1/main/getChatThread/:threadId
// @desc    Get Chat Thread with threadID
// @access  Private
const getThread = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const thread = await chatThreads.findOne({
      _id: req.params.threadId.toString(),
    });
    if (!thread) {
      return res
        .status(400)
        .json({ msg: "There is no Chat Thread for this user" });
    }
    res.json(thread);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   GET api/v1/main/getChatThreads/:adminId
// @desc    Get all Chat Threads for an admin
// @access  Private
const getThreads = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const thread = await chatThreads.find({
      adminId: req.params.adminId.toString(),
    });
    if (!thread) {
      return res
        .status(400)
        .json({ msg: "There is no Chat Threads for this admin" });
    }
    res.json(thread);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   GET api/v1/main/getCustomerChatThread/:customerId
// @desc    Get Chat Thread for an customer
// @access  Private
const getCustomerThread = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const thread = await chatThreads.find({
      customerId: req.params.customerId,
    });
    if (!thread) {
      return res
        .status(400)
        .json({ msg: "There is no Chat Threads for this admin" });
    }
    res.json(thread);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   PUT api/v1/main/addMessage/:adminId/:customerId/:threadId
// @desc    Add message to a thread
// @access  Private
const addMessage = async (req, res) => {
  try {
    const thread = await chatThreads.findOne({ _id: req.params.threadId });

    thread.messages.unshift(req.body);

    await thread.save();

    res.json(thread);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addThread,
  getThread,
  getThreads,
  getCustomerThread,
  addMessage,
};
