const Task_Model = require('../models/newCheckout');



const postnewCheckout = async (req, res) => {

    const dataSend = req.body;
    console.log(req.body)
    if (dataSend.isSame) {
        const Data = {

            fNamebill: dataSend.fNamebill,

            lNamebill: dataSend.lNamebill,

            addressbill: dataSend.addressbill,
            address2bill: dataSend.address2bill,
            isSame: dataSend.isSame,
            // adminEmail: dataSend.adminEmail,

            addressship: dataSend.addressbill,

            address2ship: dataSend.address2bill,
            orderProducts: dataSend.orderProducts,
            status: "pending"
        }
        const newData = new Task_Model(Data);

        newData
            .save()
            .then((data) => {
                res.status(200).json({ status: true, data });
            })
            .catch((err) => console.log(err));

    }
    else {
        const Data = {

            fNamebill: dataSend.fNamebill,

            lNamebill: dataSend.lNamebill,

            addressbill: dataSend.addressbill,
            address2bill: dataSend.address2bill,


            addressship: dataSend.addressship,

            address2ship: dataSend.address2ship,
            orderProducts: dataSend.orderProducts,
            status: "pending",
            totalAmount: dataSend.totalAmount
            // adminEmail: dataSend.email
        };
        const newData = new Task_Model(Data);

        newData.save()
            .then((data) => {
                res.status(200).json({ status: true, data });
            })
            .catch((err) => console.log(err));

    }


}


const getAllnewCheckout = async (req, res) => {

    Task_Model.find({})
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}





const updatenewCheckout = async (req, res) => {


    const dataSend = req.body;

    console.log(req.body)
    console.log(req.params.id);
    const id1 = req.params.id;
    console.log(id1);
    const id2 = id1.toString()

    Task_Model.findByIdAndUpdate(id2, {
        fNamebill: req.body.fNamebill,
        lNamebill: req.body.lNamebill,

        addressbill: req.body.addressbill,
        address2bill: req.body.address2bill,

        addressship: req.body.addressship,
        address2ship: req.body.address2ship



    }, function (err, data) {

        if (data) {
            console.log(data);
            res.status(200).json({ status: true, data });
        }
        else console.log(err);
    }
    )
}



const deletenewCheckout = async (req, res) => {
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
        }
    });;
}



const getOnenewCheckout = async (req, res) => {
    const id1 = req.params.id;
    const id2 = id1.toString();
    Task_Model.findById(id2)
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}
module.exports = {
    getAllnewCheckout,
    getOnenewCheckout,

    postnewCheckout,
    deletenewCheckout,
    updatenewCheckout


}