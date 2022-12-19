const express = require('express');
require('dotenv').config();
const router = express.Router();
require('dotenv').config();

// Controllers
const checkoutController = require('../controllers/checkout');
const requestController = require('../controllers/request');

const organizationController = require('../controllers/organization');

const userdigitaldataController = require('../controllers/userdigitaldata');

const employeedataController = require('../controllers/employeedata');

const companyController = require('../controllers/company');

const taskController = require('../controllers/task');

const usersController = require('../controllers/users');

const newServiceController = require('../controllers/newService');
const newEmployController = require('../controllers/newEmploy');
const newCustomerController = require('../controllers/newCustomer');
const assignTaskController = require('../controllers/assignTask');
const newCheckoutController = require('../controllers/newCheckout');
const newCalenderController = require('../controllers/newcalender');
const newPetsController = require('../controllers/Pets');





router.get('/test', (req, res) => {
  res.send('Working');
});

//s3 listvideos endpoint
// router.get('/listvideos/', aws_con.listVideos);


// Organization
// Adding users
router.post('/addorganizationusers', organizationController.addOrganizationUsers);
router.post('/addorganizationusersnew', organizationController.addOrganizationUsersNew);
router.get('/getorg/:email', organizationController.getallorganizationuser);
router.get('/getorgonlyadmin/:email', organizationController.getallorganizationuseradmin);


router.get('/getorginvitecount/:email', organizationController.getUserOrgInviteCount);
router.get('/getorguser/:userId', organizationController.getOrgUserDetails);
router.get('/getallinvites/:email', organizationController.getAllInvites);
router.put('/updateuserinvitecount', organizationController.updateInviteCount);
router.put('/rejectinvite', organizationController.rejectInvite);
router.put('/acceptinvite', organizationController.acceptInvite);
router.get('/getorgid/:orgId', organizationController.getOrgId);
router.get('/getonlyusersorgnotadmin/:orgId', organizationController.getOrgUsersNotAdmin);
router.delete('/removeuserdetailsorg/:orgId/:userEmail', organizationController.removeUserDetailOrg);


// User Digital Data
router.post('/adduserlocation', userdigitaldataController.addUserData);



// Employee Organization
router.post('/addemployeeorgdatalog', employeedataController.addUserOrgData);
router.get('/getuserorgdatalogstatus/:email/:date/:month/:year/:orgId', employeedataController.getUserDailyStatusOrg);


// Company Organization
router.get('/getallorgusers/:date/:month/:year/:orgId', companyController.getOrgUsersData);
router.get('/getreportorganization/:orgId/:month', companyController.getOrgReportData);

// Adding to cart i.e. checkout
router.post('/addtocheckout', checkoutController.addcheckout);
router.delete('/delallcheckouts/:uid', checkoutController.delallcheckouts);

// Adding request
router.post('/addrequest', requestController.addRequest);


// Tasks
router.post('/addusertask', taskController.addUserTask);
router.get('/getuseralltasks/:orgId/:userId', taskController.getAllTaskUser);
router.put('/marktaskcompleteuser', taskController.completeTask);
router.put('/marktaskpendinguser', taskController.pendingTask);
router.delete('/deletetaskforuser/:id', taskController.removeTask);
router.put('/updatetaskforuser', taskController.updateTask);



// Users
router.get('/getuserdata/:email', usersController.getUserData);
router.put('/updateuser', usersController.updateUserData);



//////




// Services
router.get('/getuserServices/:email' , newServiceController.getAllServices )
router.get('/getuserServices2/:email' , newServiceController.getAllServices2 )
router.get('/getOneuserServices/:id' , newServiceController.getOneServices )

router.post('/postuserServices' , newServiceController.postServices )
router.put('/updateuserServices/:id' , newServiceController.updateServices )
router.delete('/deleteuserServices/:id' , newServiceController.deleteServices )
// new employ
router.get('/getemploy/:email' , newEmployController.getAllEmploy )
router.get('/getOneEmploy/:id' , newEmployController.getOneEmploy )

router.post('/postEmploy' , newEmployController.postEmploy )
router.put('/updateEmploy/:id' , newEmployController.updateEmploy )
router.delete('/deleteEmploy/:id' , newEmployController.deleteEmploy )

//assign task
router.get('/getassignTask/:email' , assignTaskController.getAllassignTask )
router.get('/getOneassignTask/:id' , assignTaskController.getOneassignTask )

router.post('/postassignTask' , assignTaskController.postassignTask )
router.put('/updateassignTask/:id' , assignTaskController.updateassignTask )
router.delete('/deleteassignTask/:id' , assignTaskController.deleteassignTask )

//newCustomer
router.get('/getCustomer/:email' , newCustomerController.getAllCustomer )
router.get('/getOneCustomer/:id' , newCustomerController.getOneCustomer )

router.post('/postCustomer' , newCustomerController.postCustomer )
router.put('/updateCustomer/:id' , newCustomerController.updateCustomer )
router.delete('/deleteCustomer/:id' , newCustomerController.deleteCustomer )


//checkout

router.get('/getCheckout/:email' , newCheckoutController.getAllnewCheckout )
router.get('/getOneCheckout/:id' , newCheckoutController.getOnenewCheckout )

router.post('/postcheckout' , newCheckoutController.postnewCheckout )
router.put('/updateCheckout/:id' , newCheckoutController.updatenewCheckout )
router.delete('/deleteCheckout/:id' , newCheckoutController.deletenewCheckout )


//calender
router.get('/getCalender/:email' , newCalenderController.getAllnewCalender )
router.get('/getOneCalender/:id' , newCalenderController.getOnenewCalender )

router.post('/calender' , newCalenderController.postnewCalender )
router.put('/updateCalender/:id' , newCalenderController.updatenewCalender )
router.delete('/deleteCalender/:id' , newCalenderController.deletenewCalender )
 

//pets
router.get('/getPets/:email' , newPetsController.getAllnewPets )
router.get('/getOnePets/:id' , newPetsController.getOnenewPets )

router.post('/Pets' , newPetsController.postnewPets )
router.put('/updatePets/:id' , newPetsController.updatenewPets )
router.delete('/deletePets/:id' , newPetsController.deletenewPets )

module.exports = router;
