const { Router } = require('express')
const DishesController = require("../controllers/DishesController")
const SessionController = require("../controllers/SessionController")
const UsersController = require('../controllers/UsersController')
const UserRepository = require('../repositories/UserRepository')
const UserCreateService = require('../services/UserCreateService')

const routes = Router()

const dishesController = new DishesController()
const sessionController = new SessionController()

const userRepository = new UserRepository()
const userCreateService = new UserCreateService(userRepository)
const usersController = new UsersController(userCreateService)

routes.get('/dishes', dishesController.get)
routes.post('/dishes', dishesController.create)
routes.get('/dishes/:id', dishesController.show)
routes.delete('/dishes/:id', dishesController.delete)
routes.post('/session', sessionController.create)
routes.post('/register', (req, res) => usersController.create(req, res))

module.exports = routes