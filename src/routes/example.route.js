const express = require('express')
const {getData, postData, putData, deleteData} = require('../controllers/example.controller')

const router = express.Router()

router
    .get('/get', getData)
    .post('/post', postData)
    .put('/put', putData)
    .delete('/delete/:paramsId', deleteData)

module.exports = router