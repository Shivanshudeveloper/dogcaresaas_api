const Task_Model = require('../models/newService');


// Add  newService data
const postServices = async (req, res) => {

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
const getAllServices= async (req, res) => {
    // const { email1 } = req.body;
    const email1 = req.params.email;
    console.log(email1)
    // console.log(req.params)

    // console.log(typeof(email1))
    Task_Model.find({ email:email1, physical: false })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

// Get All  services
const getAllServices2 = async (req, res) => {
    // const { email1 } = req.body;
    const email1 = req.params.email;
    console.log(email1)
    // console.log(req.params)

    // console.log(typeof(email1))
    Task_Model.find({ email:email1, physical: true })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}



// update the service

const updateServices = async (req, res) => {

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
        template:req.body.template,
        name: req.body.name,
       description:req.body.description,
        img:req.body.img,
        oldPrice:req.body.oldPrice,
        newPrice:req.body.newPrice,
        physical:req.body.physical,
        stock:req.body.stock
    },function(err,data){

        if(data) {
            console.log(data);
            res.status(200).json({ status: true, data });
        }
        else console.log(err) ;
    }
     )}


// Delete service
const deleteServices = async (req, res) => {
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
const getOneServices= async (req, res) => {
    const id1  = req.params.id;
    const id2=id1.toString();
    Task_Model.findById(id2)
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}
module.exports = {
    getAllServices,
    getOneServices,
    getAllServices2,
    postServices,
    deleteServices,
    updateServices


}