const { v4: uuidv4 } = require('uuid');
const { PUBLIC_URL } = require('../config/keys');
const stripe = require("stripe")("sk_test_51M2CdTInyqzpr4lQgtyMDJNHz5PHzxVTGdvCU0l79uKUtWRYGBdattxNw3BjQEF6JIVlFA7lBQs0eVQGU8DqZGZ200Ydu5tZTz");
const User_Model = require('../models/User');

const connectAccount = (req, res) => {
    const stateStripe = uuidv4();
    // Redirect the account holder to Stripe's connection page
    const url = stripe.oauth.authorizeUrl({
        client_id: "ca_NDWte02Ex2LbpXsEjdU82a5oKUBUpC6d",
        scope: "read_write",
        state: stateStripe,
    });
    res.status(200).json({ status: true, url });
    console.log(url);
    // res.redirect(url);
};

const createSubscription = async (req, res) => {
    const { name, email, planId, paymentMethod } = req.body;

    const customer = await stripe.customers.create({
        email: email,
        name: name,
        payment_method: paymentMethod,
        invoice_settings: {
            default_payment_method: paymentMethod,
          },
        
    });

    

    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{
            plan: planId,
        }],
        expand: ['latest_invoice.payment_intent'],
    });

    console.log(subscription)


    res.json({
        subscriptionId: subscription.id,
        paymentStatus: subscription.latest_invoice.payment_intent.status,
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });



}

// const connectAccount = async(req, res) => {
//     const account = await stripe.accounts.create({type: 'standard'});
//     console.log(account)
//     // const accountLink = await stripe.accountLinks.create({
//     //     account: '{{CONNECTED_ACCOUNT_ID}}',
//     //     refresh_url: 'https://example.com/reauth',
//     //     return_url: 'https://example.com/return',
//     //     type: 'account_onboarding',
//     //   });
// };

const callbackStripe = async (req, res) => {
    // Get the authorization code from the callback URL
    const code = req.query.code;
    // Use the code to fetch the connected account's details
    const account = await stripe.oauth.token({
        grant_type: "authorization_code",
        code: code
    });
    // Save the connected account ID for later use
    const connectedAccountId = account.stripe_user_id;
    console.log(connectedAccountId);

    // this will add the connected account to your account
    const linkedAccount = await stripe.accounts.update(connectedAccountId, {
        metadata: {
            main_account: 'acct_1M2CdTInyqzpr4lQ'
        }
    });

    // Redirect the account holder back to your application
    // res.send(`<script>localStorage.setItem("connectedAccountId", ${connectedAccountId});</script>`);
    res.redirect(`${PUBLIC_URL}/dashboard/account?connectedAccountId=${connectedAccountId}`);
};

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency, connected_account_id } = req.body;
        // Create a PaymentIntent for the connected account
        // const { connected_account_id } = req.body;
        // const amount = 50*100;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency,
            payment_method_types: ["card"],
            stripeAccount: connected_account_id
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

module.exports = {
    connectAccount,
    callbackStripe,
    createPaymentIntent,
    createSubscription
}