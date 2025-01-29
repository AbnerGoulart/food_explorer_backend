const knex = require("../database/knex");
const dishes = require("../data/dishes");

class DetailsController {
  async get(request, response) {
    const id = request.params.id;
    // const dish = dishes[id];
    const dish = await knex("dishes").where("id", id).first()

    if (!dish) {
      return response.status(404).json({ error: "Dish not found" });
    }
    console.log(dish)

    response.status(200).json(dish);
  }
}

module.exports = DetailsController;
