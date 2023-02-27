
// Models
const Checkout_Model = require('../models/Checkout');

const addcheckout = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {
        email,
        product,
        productId,
        pets,
        bookedForDate,
        bookedForMonth,
        bookedForYear,
    } = req.body;

    const orderSubmitted = false;
    const status = "pending"


    try {
        Checkout_Model.countDocuments({ email, productId, orderSubmitted }).then((count) => {
            if (count === 0) {
                const newProduct = new Checkout_Model({
                    email,
                    product,
                    productId,
                    orderSubmitted,
                    pets,
                    status,
                    bookedForDate,
                    bookedForMonth,
                    bookedForYear,
                });
                newProduct
                    .save()
                    .then((data) => {
                        res.status(200).json("Added");
                    })
                    .catch((err) => console.log(err));
            } else {
                res.status(201).json("Already Added");
            }
        });


    } catch (err) {
        console.log(err);
    }
}

const updateServiceStatus = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {
        status,
        serviceId,
        rejectReason,
        reasonHeading
    } = req.body;
    Checkout_Model.findByIdAndUpdate(serviceId, {
        status: status,
    }, function (err, data) {

        if (data) {
            console.log(data);
            res.status(200).json({ status: true, data });
        }
        else {
            res.status(201).json({ status: false, err });
        }
    }
    )
}

const markOrderSubmitted = async (req, res) => {

    const id1 = req.params.id;;
    const id2 = id1.toString()

    Checkout_Model.findByIdAndUpdate(id2, {
        orderSubmitted: true,
    }, function (err, data) {

        if (data) {
            console.log(data);
            res.status(200).json({ status: true, data });
        }
        else console.log(err);
    }
    )
}

const getAllCheckoutProducts = async (req, res) => {
    // const { email1 } = req.body;
    const email1 = req.params.email;
    console.log(email1)
    // console.log(req.params)

    // console.log(typeof(email1))
    Checkout_Model.find({ email: email1 })
        .then((data) => {
            console.log(data)
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

const delallcheckouts = async (req, res) => {
    const { uid } = req.params;
    try {
        Checkout_Model.deleteMany({ uid })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => res.status(400).json(`Error: ${err}`));
    } catch (err) {
        console.log(err);
    }
}

const deleteCheckoutProduct = async (req, res) => {
    const id1 = req.params.id;
    const id2 = id1.toString();
    console.log(req.params.id)
    console.log(id2)

    Checkout_Model.findByIdAndDelete(id2, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Deleted : ", docs);
            res.status(200).json({ status: true, docs });
        }
    });
}

module.exports = {
    addcheckout,
    delallcheckouts,
    getAllCheckoutProducts,
    deleteCheckoutProduct,
    markOrderSubmitted,
    updateServiceStatus
}