class DetailsController {
  async get(request, response) {
    const dish = {
      "photo": "/salada.png",
      "title": "Salada Verde",
      "description": "Uma combinação fresca de alface, rúcula e espinafre com molho de limão.",
      "tags": [
        "alface",
        "rúcula",
        "espinafre",
      ],
      "price": 29.90
    }
    response.status(200).json(dish)  
  }
}

module.exports = DetailsController;  