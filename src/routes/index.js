const { Router } = require('express')

const dishesRoutes = require('./dishes.routes')
const registerRoutes = require('./register.routes')
const sectionsRoutes = require('./sections.routes')
const sessionRoutes = require('./session.routes')

const routes = Router()

routes.use('/dishes', dishesRoutes)
routes.use('/register', registerRoutes)
routes.use('/sections', sectionsRoutes)
routes.use('/session', sessionRoutes)

module.exports = routes