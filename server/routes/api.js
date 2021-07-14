const express = require('express')
const router = express.Router()
const Transaction = require('../model/transactionSchema')

router.get('/transactions',function(req,res){
    Transaction.find({}).exec(function(error,result){
        res.send(result)
    })
})
router.post('/transactions',function(req,res){
    let newTransaction = new Transaction(req.body)
    newTransaction.save()
    res.send()
})
router.delete('/transactions',function(req,res){
    let { id } = req.body
    Transaction.findByIdAndDelete(id, function (err, postdelete) {
        res.send('ok')
    })
})



module.exports = router