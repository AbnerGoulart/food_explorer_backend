const { Router } = require('express')
const UserRepository = require('../repositories/UserRepository')
const UserCreateService = require('../services/UserCreateService')
const UsersController = require('../controllers/UsersController')

const registerRoutes = Router()

const userRepository = new UserRepository()
const userCreateService = new UserCreateService(userRepository)
const usersController = new UsersController(userCreateService)

registerRoutes.post('/', (req, res) => usersController.create(req, res))

module.exports = registerRoutes