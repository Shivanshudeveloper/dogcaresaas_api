const Update_Model = require('../models/customerUpdates');


// Add  newService data
const postUpdates = async (req, res) => {

    const dataSend = req.body;
    const newData = new Update_Model(dataSend);
        newData
            .save()
            .then((data) => {
                res.status(200).json({status: true, data});
            })
            .catch((err) => console.log(err));

}

// Get All  services
const getAllUpdates = async (req, res) => {
    // const { email1 } = req.body;
    const email1 = req.params.email;
    console.log(email1)
    // console.log(req.params)

    // console.log(typeof(email1))
    Update_Model.find({email:email1})
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

module.exports = {
    getAllUpdates,
    postUpdates,
}