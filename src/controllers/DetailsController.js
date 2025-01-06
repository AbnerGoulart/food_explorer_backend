const dishes = require("../data/dishes");

class DetailsController {
  async get(request, response) {
    const id = request.params.id;
    const dish = dishes[id];

    if (!dish) {
      return response.status(404).json({ error: "Dish not found" });
    }

    response.status(200).json(dish);
  }
}

module.exports = DetailsController;
