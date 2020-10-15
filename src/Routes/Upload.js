const uploadRoute = require('express').Router()
const uploadController = require('../Controller/Upload')
const middleware = require('../Helpers/Middleware')

uploadRoute.post('/', middleware.authToken, uploadController.uploadImage)


module.exports = uploadRoute