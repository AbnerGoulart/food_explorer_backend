const knex = require("../database/knex")

class SectionsController {
    async show(request, response) {
        const sections = await knex('sections').select('name', 'label')
        if (!sections) {
            response.status(404).json({error: "resource not found"})
            return
        }

        response.status(200).json(sections)
    }
}

module.exports = SectionsController