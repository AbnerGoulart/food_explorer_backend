const { Router } = require('express')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const SectionsController = require('../controllers/SectionsController')

const sectionsRoutes = Router()

const sectionsController = new SectionsController()

sectionsRoutes.get('/', ensureAuthenticated, sectionsController.show)

module.exports = sectionsRoutes