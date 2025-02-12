const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage");

class DishesController {
    async get(request, response) {
        let tags = []
        const id = request.params.id;
        const dish = await knex("dishes")
                            .where("dishes.id", id)
                            .join("sections", "dishes.section_id", "sections.id")
                            .select("dishes.*", "sections.name as section")
                            .first()
        if (dish) {
            tags = await knex.from("tags").where("dish_id", id)
        }

        if (!dish) {
            return response.status(404).json({ error: "Prato não encontrado" });
        }

        const data = {
            id: dish.id,
            title: dish.title,
            description: dish.description,
            section: dish.section,
            photo: dish.photo,
            price: dish.price,
            tags: tags.map(tag => tag.name)
        }

        response.status(200).json(data);
    }

    async show(request, response) {
        const responseData = {}
        const dishes = await knex("dishes")
                                .where("enabled", 1)
                                .join("sections", "dishes.section_id", "sections.id")
                                .select("dishes.*", "sections.label as section_label")

        dishes.forEach(dish => {
            const data = {
                photo: dish.photo,
                title: dish.title,
                price: dish.price,
                description: dish.description,
                id: dish.id
            }

            if (responseData[dish.section_label] != undefined) {
                responseData[dish.section_label]["data"].push(data)
            } else {
                responseData[dish.section_label] = {
                    title: dish.section_label,
                    data: [data]
                }
            }
        })

        const dishesArr = []
        Object.keys(responseData).forEach((key, index) => {
            dishesArr.push(responseData[key]) 
        })

        response.status(200).json(dishesArr)
    }

    async create(request, response) {
        const { title, section, description, price, tags } = request.body
        const photoFileName = request.file.filename
        const diskStorage = new DiskStorage()
        const photo = await diskStorage.saveFile(photoFileName)

        const dishSection = await knex('sections').where('name', section).select('id').first()
        if (!dishSection) {
            response.status(404).json({error: "Seção não encontrada"})
            return
        }

        try {
            const dish = await knex("dishes").insert({
                title,
                section_id: dishSection.id,
                description,
                photo,
                price,
                enabled: true
            })

            if (tags) {
                const tagsArr = tags.split(",")
                const newTags = tagsArr.map(tag => ({dish_id: dish[0], name: tag}))
                await knex("tags").insert(newTags)
            }
        } catch (error) {
            console.log(error)
            response.status(500).json({ error: "Algo inesperado aconteceu! Tente novamente mais tarde." })
        }

        response.status(201).end()
    }

    async update(request, response) {
        const { id } = request.params
        const { title, section, description, price, tags } = request.body
        const photoFileName = request.file ? request.file.filename : null

        const dish = await knex("dishes")
                            .where("dishes.id", id)
                            .join("sections", "dishes.section_id", "sections.id")
                            .select("dishes.*", "sections.name as section")
                            .first()
        if (!dish) {
            response.status(404).json({ error: "Prato não encontrado" })
            return
        }
        
        const updatedDish = {}
        if (title && title != dish.title) {
            updatedDish.title = title
        }

        if (section && section != dish.section) {
            const sectionId = await knex('sections').select('id').where('name', section).first()
            if (!sectionId) {
                response.status(404).json({error: "Seção não encontrada"})
                return
            }
            updatedDish.section_id = sectionId
        }

        if (description && description != dish.description) {
            updatedDish.description = description
        }

        if (price && price != dish.price) {
            updatedDish.price = price
        }

        if (photoFileName) {
            const diskStorage = new DiskStorage()
            const photo = await diskStorage.saveFile(photoFileName)
            updatedDish.photo = photo
        }

        await knex("tags").where("dish_id", id).delete()
        if (tags) {
            const newTags = tags.map(tag => {
                return { name: tag, dish_id: id}
            })
            await knex("tags").insert(newTags)
        }

        if (Object.keys(updatedDish).length > 0) {
            await knex("dishes").where("id", id).update(updatedDish)
        }

        return response.status(204).end()
    }

    async delete(request, response) {
        const { id } = request.params

        knex("dishes").update("enabled", false).where("id", id).then(rows => {
            if (!rows) {
                return response.status(404).json({ success: false });
            }
            return response.status(204).end();
        })
    }
}

module.exports = DishesController