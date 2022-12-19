const Task_Model = require('../models/Pets');




const postnewPets= async (req, res) => {

    const dataSend = req.body;
console.log(req.body);
    const newData = new Task_Model(dataSend);
        newData
            .save()
            .then((data) => {
                res.status(200).json({status: true, data});
            })
            .catch((err) => console.log(err));
    

} 


const getAllnewPets= async (req, res) => {

    const email1 = req.params.email;
  


    Task_Model.find({ adminEmail:email1 })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}





const updatenewPets = async (req, res) => {

 
    const dataSend = req.body;

     console.log(req.body)
     console.log(req.params.id);
     const id1  = req.params.id;
     console.log(id1);
     const id2=id1.toString()

     Task_Model.findByIdAndUpdate(id2 , {
        name :req.body.name,
        category :req.body.category,

        country : req.body.country,
        breed:req.body.breed,

        testAddress:req.body.testAddress,
        additionalInfo :req.body.additionalInfo,
        vaccine :req.body.vaccine,
        ownerId:req.body.ownerId,
        ownerEmail :req.body.ownerEmail,




    },function(err,data){

        if(data) {
            console.log(data);
            res.status(200).json({ status: true, data });
        }
        else console.log(err) ;
    }
     )}



const deletenewPets = async (req, res) => {
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



const getOnenewPets= async (req, res) => {
    const id1  = req.params.id;
    const id2=id1.toString();
    Task_Model.findById(id2)
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}
module.exports = {
    getAllnewPets,
    getOnenewPets,

    postnewPets,
    deletenewPets,
    updatenewPets


}