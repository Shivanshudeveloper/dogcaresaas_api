const Task_Model = require('../models/newEmploy');


// Add  newService data
const postEmploy= async (req, res) => {

    const dataSend = req.body;

    const newData = new Task_Model(dataSend);
        newData
            .save()
            .then((data) => {
                res.status(200).json({status: true, data});
            })
            .catch((err) => console.log(err));

}

// Get All  services
const getAllEmploy= async (req, res) => {
    // const { email1 } = req.body;
    const email1 = req.params.email;
    // console.log(email1)
    // console.log(req.params)

    // console.log(typeof(email1))
    Task_Model.find({ adminEmail:email1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}



// update the service

const updateEmploy = async (req, res) => {

    // const { 
    //   _template , _name, _description ,_email _img , _email , _oldPrice , _newPrice , _physical , _stock
    //  } = req.body;
    const dataSend = req.body;

     console.log(req.body)
     console.log(req.params.id);
     const id1  = req.params.id;
     console.log(id1);
     const id2=id1.toString()

     Task_Model.findByIdAndUpdate(id2 , {
        fullName:req.body.fullName,
        email: req.body.email,
        phone_number:req.body.phone_number,
        address:req.body.address,
        bio:req.body.bio,
        img:req.body.img,


    },function(err,data){

        if(data) {
            console.log(data);
            res.status(200).json({ status: true, data });
        }
        else console.log(err) ;
    }
     )}


// Delete service
const deleteEmploy = async (req, res) => {
    const id1  = req.params.id;
    const id2=id1.toString();
    console.log(req.params.id)
    console.log(id2)

    Task_Model.findByIdAndDelete(id2, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });;
}


// Get All  services
const getOneEmploy= async (req, res) => {
    const id1  = req.params.id;
    const id2=id1.toString();
    Task_Model.findById(id2)
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}
module.exports = {
    getAllEmploy,
    getOneEmploy,

    postEmploy,
    deleteEmploy,
    updateEmploy


}