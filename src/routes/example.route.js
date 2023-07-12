const express = require('express')
const {getData, postData, putData, deleteData} = require('../controllers/example.controller')

const router = express.Router()

router.route('/get')
    .get(getData)

router.route('/post')
    .post(postData)

router.route('/put')
    .put(putData)

router.route('/delete/:paramsId')
    .delete(deleteData)

module.exports = router