class DishesController {
  async get(request, response) {
      let dishes = {
          "meals": [
              {
                  "photo": "prugna-pie.jpg",
                  "title": "Prugna Pie",
                  "price": 79.97
              },
              {
                  "photo": "prugna-pie.jpg",
                  "title": "Prugna Pie",
                  "price": 79.97
              }
          ],
          "main_dishes": [
              {
                  "photo": "prugna-pie.jpg",
                  "title": "Prugna Pie",
                  "price": 79.97
              },
              {
                  "photo": "prugna-pie.jpg",
                  "title": "Prugna Pie",
                  "price": 79.97
              }        
          ],
          "juices": [
              {
                  "photo": "prugna-pie.jpg",
                  "title": "Prugna Pie",
                  "price": 79.97
              },
              {
                  "photo": "prugna-pie.jpg",
                  "title": "Prugna Pie",
                  "price": 79.97
              }
          ]
      }
      
      response.status(200).json(dishes)
  }
}

module.exports = DishesController