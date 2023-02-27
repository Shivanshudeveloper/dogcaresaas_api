const Event_Model = require('../models/newEvent');


// Add user digital data
const addEvent = async (req, res) => {
    
    res.setHeader("Content-Type", "application/json");
    const dataSend = req.body;
    const newData = new Event_Model(dataSend);
        newData
            .save()
            .then((data) => {
                res.status(200).json({status: true, data});
            })
            .catch((err) => console.log(err));
}

// Get All User Tasks
const getAllEvents = async (req, res) => {
    Event_Model.find().sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Delete Task For User
const removeEvent = async (req, res) => {
    const { id } = req.params;
    Event_Model.findOneAndDelete({ _id: id })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Update Organizations Invites Count
const updateEvent = async (req, res) => {
    const { task, taskId } = req.body;
    Event_Model.updateOne({ _id: taskId }, { $set: { task } })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

module.exports = {
    addEvent,
    getAllEvents,
    removeEvent,
}