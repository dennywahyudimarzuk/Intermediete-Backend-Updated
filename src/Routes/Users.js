const usersRoutes = require('express').Router()
const usersController = require('../Controller/Users')
const middleware = require('../Helpers/Middleware')

usersRoutes.get('/',middleware.authToken, usersController.getAllUsers)
usersRoutes.get('/:id',middleware.authToken, usersController.getUserId)
usersRoutes.delete('/:id', middleware.authToken, usersController.deleteUser)
usersRoutes.post('/', middleware.authToken, usersController.postUser)
// usersRoutes.patch('/:id', usersController.patchUser)


module.exports = usersRoutes