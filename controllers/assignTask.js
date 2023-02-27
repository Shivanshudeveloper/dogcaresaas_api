const Task_Model = require('../models/assignTask');


// Add  newService data
const postassignTask = async (req, res) => {

    const dataSend = req.body.users;

    if (req.body.action == "assign-task") {
        for (index = 0; index < dataSend.length; index++) {
            var new_task = new Task_Model({
                task: req.body.task,
                user: dataSend[index],
                loginnedEmail: req.body.loginnedEmail,
                assignedDay: req.body.day,
                assignedMonth: req.body.month,
                assignedDate: req.body.date,
                assignedYear: req.body.year,
                assignedTime: req.body.time,
                assignedTimeMeridiem: req.body.timeMeridiem,
                completedDay: "",
                completedMonth: "",
                completedDate: "",
                completedYear: "",
                completedTime: "",
                completedTimeMeridiem: "",
                completionStatus: req.body.completionStatus,
            })

            new_task
                .save()
                .then((data) => {
                    res.status(200).json({ status: true });
                })
                .catch((err) => console.log(err));
        }
    } else if (req.body.action == "mark-complete") {
        Task_Model.updateOne({ _id: req.body.id }, {
            $set: {
                completedDay: req.body.day,
                completedMonth: req.body.month,
                completedDate: req.body.date,
                completedYear: req.body.year,
                completedTime: req.body.time,
                completedTimeMeridiem: req.body.timeMeridiem,
                completionStatus: req.body.completionStatus,
            }
        })
            .then((data) => {
                res.status(200).json({ status: true, data: "Marked Completed" });
            })
            .catch((err) => console.log(err));
    } else if (req.body.action == "mark-pending") {
        Task_Model.updateOne({ _id: req.body.id }, {
            $set: {
                completedDay: "",
                completedMonth: "",
                completedDate: "",
                completedYear: "",
                completedTime: "",
                completedTimeMeridiem: "",
                completionStatus: req.body.completionStatus,
            }
        })
            .then((data) => {
                res.status(200).json({ status: true, data: "Marked Pending" });
            })
            .catch((err) => console.log(err));
    } else if (req.body.action == "update-task") {
        Task_Model.updateOne({ _id: req.body.id }, {
            $set: {
                task: req.body.task,
            }
        })
            .then((data) => {
                res.status(200).json({ status: true, data: "Task Updated" });
            })
            .catch((err) => console.log(err));
    }
}

// Get All  services
const getAllassignTask = async (req, res) => {
    // const { email1 } = req.body;
    const email1 = req.params.email;
    // console.log(req.params)

    // console.log(typeof(email1))
    Task_Model.find({ loginnedEmail: email1 })
        .then((data) => {
            console.log(data);
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

const getAllassignEmployeeTask = async (req, res) => {
    // const { email1 } = req.body;
    const email1 = req.params.email;
    // console.log(req.params)

    // console.log(typeof(email1))
    Task_Model.find({ user: email1 })
        .then((data) => {
            console.log(data);
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}



// update the service

const updateassignTask = async (req, res) => {

    // const { 
    //   _template , _name, _description ,_email _img , _email , _oldPrice , _newPrice , _physical , _stock
    //  } = req.body;
    const dataSend = req.body;

    console.log(req.body)
    console.log(req.params.id);
    const id1 = req.params.id;
    console.log(id1);
    const id2 = id1.toString()

    Task_Model.findByIdAndUpdate(id2, {
        task: req.body.task,
        user: req.body.user,



    }, function (err, data) {

        if (data) {
            console.log(data);
            res.status(200).json({ status: true, data });
        }
        else console.log(err);
    }
    )
}


// Delete service
const deleteassignTask = async (req, res) => {
    const id1 = req.params.id;
    const id2 = id1.toString();
    console.log(req.params.id)
    console.log(id2)

    Task_Model.findByIdAndDelete(id2, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Deleted : ", docs);
            res.status(200).json({ status: true, docs });
        }
    });
}


// Get All  services
const getOneassignTask = async (req, res) => {
    const id1 = req.params.id;
    const id2 = id1.toString();
    Task_Model.findById(id2)
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}
module.exports = {
    getAllassignTask,
    getOneassignTask,
    deleteassignTask,
    updateassignTask,
    postassignTask,
    getAllassignEmployeeTask

}