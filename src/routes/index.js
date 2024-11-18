const { Router } = require('express')
const DetailsController = require('../controllers/DetailsController')
const DishesController = require("../controllers/DishesController")

const routes = Router()

const dishesController = new DishesController()
const detailsController = new DetailsController()

routes.get('/dishes', dishesController.get)
routes.get('/dishes/details/:id', detailsController.get)

module.exports = routes