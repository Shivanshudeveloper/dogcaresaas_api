const Task_Model = require("../models/newCustomer");

const postCustomer = async (req, res) => {
  const dataSend = req.body;

  const newData = new Task_Model(dataSend);
  newData
    .save()
    .then((data) => {
      console.log(data);
      res.status(200).json({ status: true, data });
    })
    .catch((err) => console.log(err));
};

const getAllCustomer = async (req, res) => {
  const email1 = req.params.email;
  console.log(email1);

  Task_Model.find({ adminEmail: email1 })
    .then((data) => {
      res.status(200).json({ status: true, data });
    })
    .catch((err) => console.log(err));
};

const getCustomerByEmail = async (req, res) => {
  const email1 = req.params.email;
  console.log(email1);

  Task_Model.find({ workEmail: email1 })
    .then((data) => {
      res.status(200).json({ status: true, data });
    })
    .catch((err) => console.log(err));
};

const updateCustomer = async (req, res) => {
  const dataSend = req.body;

  console.log(req.body);
  console.log(req.params.id);
  const id1 = req.params.id;
  console.log(id1);
  const id2 = id1.toString();

  Task_Model.findByIdAndUpdate(
    id2,
    {
      fullName: req.body.fullName,
      companyName: req.body.companyName,
      workEmail: req.body.workEmail,
      phone_number: req.body.phone_number,
      password: req.body.password,
      country: req.body.country,
      state: req.body.state,
      address1: req.body.address1,
      address2: req.body.address2,
    },
    function (err, data) {
      if (data) {
        console.log(data);
        res.status(200).json({ status: true, data });
      } else console.log(err);
    }
  );
};

const addBasicDetails = async (req, res) => {
  const userId = req.params.id;
  Task_Model.findByIdAndUpdate(
    userId.toString(),
    {
      basicDetails: req.body.basicDetails,
    },
    function (err, data) {
      if (data) {
        console.log(data);
        res.status(200).json({ status: true, data });
      } else console.log(err);
    }
  );
};

const addOwnerInformation = async (req, res) => {
  const userId = req.params.id;
  Task_Model.findByIdAndUpdate(
    userId.toString(),
    {
      ownerInformation: req.body.ownerInformation,
    },
    function (err, data) {
      if (data) {
        console.log(data);
        res.status(200).json({ status: true, data });
      } else console.log(err);
    }
  );
};

const addEmergencyContact = async (req, res) => {
  const userId = req.params.id;
  Task_Model.findByIdAndUpdate(
    userId.toString(),
    {
      emergencyContact: req.body.emergencyContact,
    },
    function (err, data) {
      if (data) {
        console.log(data);
        res.status(200).json({ status: true, data });
      } else console.log(err);
    }
  );
};

const addPetFiles = async (req, res) => {
  const userId = req.params.id;
  Task_Model.findByIdAndUpdate(
    userId.toString(),
    {
      petFiles: req.body.petFiles,
    },
    function (err, data) {
      if (data) {
        console.log(data);
        res.status(200).json({ status: true, data });
      } else console.log(err);
    }
  );
};

const addVetInformation = async (req, res) => {
  const userId = req.params.id;
  Task_Model.findByIdAndUpdate(
    userId.toString(),
    {
      vetInformation: req.body.vetInformation,
    },
    function (err, data) {
      if (data) {
        console.log(data);
        res.status(200).json({ status: true, data });
      } else console.log(err);
    }
  );
};

const addReportCardToCustomer = async (req, res) => {
  const userId = req.params.id;
  Task_Model.findByIdAndUpdate(
    userId.toString(),
    { $addToSet: { reportCardIds: req.body.reportId } },
    { safe: true, upsert: true, new: true },
    function (err, data) {
      if (data) {
        console.log(data);
        res.status(200).json({ status: true, data });
      } else console.log(err);
    }
  );
};

const deleteCustomer = async (req, res) => {
  const id1 = req.params.id;
  const id2 = id1.toString();
  console.log(req.params.id);
  console.log(id2);

  Task_Model.findByIdAndDelete(id2, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
      res.status(200).json({ status: true, docs });
    }
  });
};

const getOneCustomer = async (req, res) => {
  const id1 = req.params.id;
  const id2 = id1.toString();
  Task_Model.findById(id2)
    .then((data) => {
      res.status(200).json({ status: true, data });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAllCustomer,
  getOneCustomer,
  getCustomerByEmail,
  postCustomer,
  deleteCustomer,
  updateCustomer,
  addBasicDetails,
  addEmergencyContact,
  addOwnerInformation,
  addPetFiles,
  addVetInformation,
  addReportCardToCustomer,
};
