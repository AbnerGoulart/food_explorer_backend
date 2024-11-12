class DishesController {
  async get(request, response) {
      let dishes = {
          "meals": {
            "title": "Salada",
            "data": [
                {
                    "photo": "/salada.png",
                    "title": "Salada Verde",
                    "price": 29.90,
                    "id": 1
                },
                {
                    "photo": "salada2.png",
                    "title": "Salada Italiana",
                    "price": 29.90,
                    "id": 2
                },
                {
                    "photo": "/salada.png",
                    "title": "Prugna Pie",
                    "price": 79.97,
                    "id": 7
                }
            ]
          },
          "main_dishes": {
            "title": "Pratos Principais",
            "data": [

                {
                    "photo": "/bacon.png",
                    "title": "Bacon Nórdico",
                    "price": 51.78,
                    "id": 3
                },
                {
                    "photo": "/queijo.png",
                    "title": "Queijo Mineiro",
                    "price": 46.70,
                    "id": 4
                },
                {
                    "photo": "/torta.png",
                    "title": "Torta Pataquera",
                    "price": 16.75,
                    "id": 8
                },
                {
                    "photo": "/cake2.png",
                    "title": "Homer Cake",
                    "price": 6.70,
                    "id": 4
                }   
            ]
          },
          "juices": {
            "title": "Bebidas",
            "data": [
                {
                    "photo": "/iceTea.png",
                    "title": "Chá Gelado",
                    "price": 14.57,
                    "id": 5
                },
                {
                    "photo": "/iceTea2.png",
                    "title": "Chá de Canela",
                    "price": 13.24,
                    "id": 6
                },
                {
                    "photo": "/capuccino.png",
                    "title": "Capuccino",
                    "price": 9.80,
                    "id": 4
                }
            ]
          } 
      }
      
      response.status(200).json(dishes)
  }
}

module.exports = DishesController