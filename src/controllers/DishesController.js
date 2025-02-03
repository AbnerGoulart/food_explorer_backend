const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

class DishesController {

    async show(request, response) {
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

    async get(_, response) {
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
            console.log(error)
            response.status(500).json({error: "something unexpected happened! Try again later."})
        }

        response.status(201).end()
    }

    async delete(request, response) {
        const { id } = request.params

        knex("dishes").update("enabled", false).where("id", id).then(rows => {
            if (!rows){
                return response.status(404).json({success:false});
            }
            return response.status(204).end();
        })
    }

    // async savePhoto(request, response) {
    //     const photoFileName = request.file.filename
    //     const diskStorage = new DiskStorage()
    //     const photo = await diskStorage.saveFile(photoFileName)

    //     response.status(200).json({photo})
    // }
}

module.exports = DishesController