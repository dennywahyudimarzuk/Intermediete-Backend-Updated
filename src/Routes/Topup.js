const topupRoutes = require('express').Router()
const topupController = require('../Controller/Topup')
const middleware = require('../Helpers/Middleware')

topupRoutes.get('/',topupController.getAllTopup)
topupRoutes.delete('/:id',middleware.authToken, topupController.deleteTopup)
topupRoutes.post('/',middleware.authToken, topupController.postTopup)
// topupRoutes.pattopupusersController.patchUser)


module.exports = topupRoutes