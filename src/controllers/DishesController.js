const knex = require("../database/knex")

class DishesController {

    constructor() {

    }

    async get(request, response) {
        const responseData = {}
        const dishes = await knex("dishes")

        dishes.forEach(dish => {
            const data = {
                photo: dish.photo,
                title: dish.title,
                price: dish.price,
                description: dish.description
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
        const { title, section, description, photo, price } = request.body

        console.log(description)

        try {
            const response = await knex("dishes").insert({
                title,
                section,
                description,
                photo,
                price
            })
        } catch (error) {
            console.log(error)
            response.status(500).json({error: "something unexpected happened! Try again later."})
        }

        response.status(201).end()
    }
}

module.exports = DishesController