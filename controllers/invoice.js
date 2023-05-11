const InvoiceModel = require("../models/invoice");

// @route   Post api/v1/main/addInvoice
// @desc    Add a new Invoice
// @access  Private
const addInvoice = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const newInvoice = new InvoiceModel(req.body);
    const invoice = await newInvoice.save();
    res.json(invoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   Get api/v1/main/getInvoices
// @des     Fetch all invoices
// @access Private
const getAllInvoices = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const invoices = await InvoiceModel.find();
    res.json(invoices);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   Get api/v1/main/getInvoices/:invoiceId
// @des     Fetch a particular report card
// @access Private
const getParticularInvoice = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const invoice = await InvoiceModel.findById(req.params.invoiceId);
    if (!invoice) {
      return res.status(404).json({ msg: "Invoice not Found" });
    }
    res.json(invoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addInvoice,
  getAllInvoices,
  getParticularInvoice,
};
