const Task_Model = require('../models/newCustomer');



const postCustomer= async (req, res) => {

    const dataSend = req.body;

    const newData = new Task_Model(dataSend);
        newData
            .save()
            .then((data) => {
                console.log(data);
                res.status(200).json({status: true, data});
            })
            .catch((err) => console.log(err));

}


const getAllCustomer= async (req, res) => {

    const email1 = req.params.email;
    console.log(email1);


    Task_Model.find({ adminEmail:email1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}





const updateCustomer = async (req, res) => {


    const dataSend = req.body;

     console.log(req.body)
     console.log(req.params.id);
     const id1  = req.params.id;
     console.log(id1);
     const id2=id1.toString()

     Task_Model.findByIdAndUpdate(id2 , {
        fullName:req.body.fullName,
        companyName:req.body.companyName,

        workEmail: req.body.workEmail,
        phone_number:req.body.phone_number,
        password:req.body.password
       


    },function(err,data){

        if(data) {
            console.log(data);
            res.status(200).json({ status: true, data });
        }
        else console.log(err) ;
    }
     )}



const deleteCustomer = async (req, res) => {
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



const getOneCustomer= async (req, res) => {
    const id1  = req.params.id;
    const id2=id1.toString();
    Task_Model.findById(id2)
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}
module.exports = {
    getAllCustomer,
    getOneCustomer,

    postCustomer,
    deleteCustomer,
    updateCustomer


}