const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage");
const AppError = require("../utils/AppError");

class DishesController {

    async get(request, response) {
        let tags = []
        const id = request.params.id;
        const dish = await knex("dishes").where("id", id).first()
        if (dish) {
            tags = await knex.from("tags").where("dish_id", id)
        }

        if (!dish) {
            return response.status(404).json({ error: "Dish not found" });
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
        const dishes = await knex("dishes").where("enabled", 1)

        dishes.forEach(dish => {
            const data = {
                photo: dish.photo,
                title: dish.title,
                price: dish.price,
                description: dish.description,
                id: dish.id
            }

            if (responseData[dish.section] != undefined) {
                responseData[dish.section]["data"].push(data)
            } else {
                responseData[dish.section] = {
                    title: dish.section_title,
                    data: [data]
                }
            }
        })

        response.status(200).json(responseData)
    }

    async create(request, response) {
        const { title, section, description, price } = request.body
        const photoFileName = request.file.filename
        const diskStorage = new DiskStorage()
        const photo = await diskStorage.saveFile(photoFileName)

        try {
            await knex("dishes").insert({
                title,
                section,
                section_title: "Pratos Principais",
                description,
                photo,
                price,
                enabled: true
            })
        } catch (error) {
            response.status(500).json({ error: "something unexpected happened! Try again later." })
        }

        response.status(201).end()
    }

    async update(request, response) {
        const { id } = request.params
        const { title, section, description, price } = request.body
        const photoFileName = request.file ? request.file.filename : null

        const dish = await knex("dishes").where("id", id).first()
        if (!dish) {
            console.log("não é prato")
            return response.status(404).json({ error: "Dish not found" })
        }
        
        title, section, description, price
        const updatedDish = {}
        if (title != dish.title) {
            updatedDish.title = title
        }

        if (section != dish.section) {
            updatedDish.section = section
        }

        if (description != dish.description) {
            updatedDish.description = description
        }

        if (price != dish.price) {
            updatedDish.price = price
        }

        if (photoFileName) {
            const diskStorage = new DiskStorage()
            const photo = await diskStorage.saveFile(photoFileName)
            updatedDish.photo = photo
        }

        await knex("dishes").where("id", id).update(updatedDish)

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