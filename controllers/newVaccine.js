const Vaccine_Model = require('../models/newVaccine');


// Add user digital data
const addPetVaccine = async (req, res) => {
    var error = false;
    res.setHeader("Content-Type", "application/json");
    const dataSend = req.body;

    const newData = new Vaccine_Model(dataSend);
        newData
            .save()
            .then((data) => {
                res.status(200).json({status: true, data});
            })
            .catch((err) => console.log(err));
    // Vaccine_Model.countDocuments({ userId: dataSend.userId, orgId: dataSend.userId }).then((count) => {
    //     if (count === 0) {
            
    //     } else {
    //         console.log("Already Added");
    //     }
    // })
}

// Get All User Tasks
const getAllPetVaccines = async (req, res) => {
    const { petId } = req.params;
    Vaccine_Model.find({ petId }).sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

const getAllAdminVaccines = async (req, res) => {
    const { adminEmail } = req.params;
    Vaccine_Model.find({ adminEmail }).sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
            console.log(data)
        })
        .catch((err) => console.log(err));
}

const getAllCustomerVaccines = async (req, res) => {
    const { customerEmail } = req.params;
    Vaccine_Model.find({ customerEmail }).sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Mark The Task As Complete
const completeVaccination = async (req, res) => {
    const { id, vaccinatedDay, vaccinatedMonth, vaccinatedDate, vaccinatedYear, vaccinatedTime, vaccinatedTimeMeridiem } = req.body;
    Vaccine_Model.updateOne({ _id: id }, { $set: {vaccinationStatus: 'Vaccinated', vaccinatedDay: vaccinatedDay, vaccinatedDate: vaccinatedDate,vaccinatedMonth: vaccinatedMonth, vaccinatedYear: vaccinatedYear, vaccinatedTime: vaccinatedTime, vaccinatedTimeMeridiem: vaccinatedTimeMeridiem } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Mark The Task As Pending
const pendingVaccination = async (req, res) => {
    const { id } = req.body;
    Vaccine_Model.updateOne({ _id: id }, { $set: {status: 'Pending', vaccinated_day: "", vaccinated_date: "",vaccinated_month: "", vaccinated_year: "", vaccinated_time: "", vaccinated_meredian: "" } })
        .then((data) => {
            console.log("done")
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Delete Task For User
const removeVaccine = async (req, res) => {
    const { id } = req.params;
    Vaccine_Model.findOneAndDelete({ _id: id })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Update Organizations Invites Count
const updateVaccine = async (req, res) => {
    const { vaccineName, vaccineId } = req.body;
    Vaccine_Model.updateOne({ _id: vaccineId }, { $set: { vaccineName } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

module.exports = {
    addPetVaccine,
    getAllAdminVaccines,
    getAllPetVaccines,
    getAllCustomerVaccines,
    completeVaccination,
    pendingVaccination,
    removeVaccine,
    updateVaccine
}