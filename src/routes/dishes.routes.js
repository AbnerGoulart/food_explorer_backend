const { Router } = require('express')
const multer = require("multer")
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const ensureIsAdmin = require('../middlewares/ensureIsAdmin')
const uploadConfig = require("../config/upload")
const DishesController = require("../controllers/DishesController")
const upload = multer(uploadConfig.MULTER)
const dishesController = new DishesController()
const dishesRoutes = Router()

dishesRoutes.get('/', ensureAuthenticated, dishesController.show)
dishesRoutes.get('/:id', ensureAuthenticated, dishesController.get)
dishesRoutes.post('/', ensureAuthenticated, ensureIsAdmin, upload.single("photo"), dishesController.create)
dishesRoutes.put('/:id', ensureAuthenticated, ensureIsAdmin, upload.single("photo"), dishesController.update)
dishesRoutes.delete('/:id', ensureAuthenticated, ensureIsAdmin, dishesController.delete)

module.exports = dishesRoutes