const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    vendor:String,
    amount:Number,
    category:String
})

const transaction = mongoose.model("transaction", transactionSchema)
module.exports = transaction