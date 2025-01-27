const { Router } = require('express')
const DetailsController = require('../controllers/DetailsController')
const DishesController = require("../controllers/DishesController")
const SessionController = require("../controllers/SessionController")

const routes = Router()

const dishesController = new DishesController()
const detailsController = new DetailsController()
const sessionController = new SessionController()

routes.get('/dishes', dishesController.get)
routes.post('/dishes', dishesController.create)
routes.get('/dishes/details/:id', detailsController.get)
routes.post('/session', sessionController.create)

module.exports = routes