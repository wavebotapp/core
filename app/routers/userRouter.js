const express = require('express')
const route = express.Router()
const userController = require('../Controllers/userController')
const coinController = require('../Controllers/coinBuySell')
const { authuser } = require("../middlewares/authuser")
const passport = require('passport')
//================================= User Controllers ================================
route.post('/signup', userController.signUp)
route.post('/login', userController.login)
route.post('/verify', userController.verify)
route.post('/resendotp', userController.resendOTP)
route.post('/forgetPassword', userController.ForgetPassword)
route.post('/resetPassword', userController.resetPassword)
route.post('/watchlist', authuser, userController.watchList)
route.get('/getUserProfile', authuser, userController.getUserProfile);
route.post('/addWallet', authuser, userController.addWallet);
route.get('/recentUsers', authuser, userController.recentUsers);
route.get('/allWatchlistData', authuser, userController.allWatchList);
route.post('/removeCoinWatchlist', authuser, userController.removeCoinWatchlist);
route.get('/profile',(req,res)=>{
    return res.status(200).send({ 'status': true, 'code': 200, 'msg': 'Profile Show successfully.' });
});



route.post('/balance', authuser  ,coinController.addbalance);
route.post('/buyCoin', authuser ,  coinController.buy);
route.post('/sellCoin', authuser ,  coinController.sell);
route.get('/viewbalance', authuser ,  coinController.viewBalance);

module.exports = route