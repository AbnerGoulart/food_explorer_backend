const { Router } = require('express')

const routes = Router()

DishesController = require("../controllers/DishesController")
dishesController = new DishesController()

routes.get('/dishes', dishesController.get)

module.exports = routes