const mongoose = require('mongoose');

const purchaseSchema  = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    coinId:{
        type : String,
    } ,
    amount: {
        type: Number,
    },
    price:  {
        type: Number,
    },
    units:  {
        type: Number,
    },
    averagePrice:  {
        type: Number,
    },
    sellValue:  {
        type: Number,
    },
    profitLoss:  {
        type: Number,
    },
    buySellCalculation:  {
        type: Number,
    },
}, { timestamps: true })

const PurchaseModel  = mongoose.model('Purchase', purchaseSchema );

module.exports = PurchaseModel