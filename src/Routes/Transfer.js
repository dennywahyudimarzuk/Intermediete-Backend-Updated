const transferRoutes = require('express').Router()
const transferController = require('../Controller/Transfer')
const search = require('../search')
const middleware = require('../Helpers/Middleware')

transferRoutes.get('/',transferController.getAllTransfer)
transferRoutes.delete('/:id',middleware.authToken, transferController.deleteTransfer)
transferRoutes.post('/',middleware.authToken, transferController.postTransfer)
transferRoutes.get('/search', search.searchReceiver)
// transferRoutes.pattransferusersController.patchUser)


module.exports = transferRoutes