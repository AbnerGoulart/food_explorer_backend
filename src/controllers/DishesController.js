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
                      "description": "Uma combinação fresca de alface, rúcula e espinafre com molho de limão.",
                      "id": 1
                  },
                  {
                      "photo": "/salada2.png",
                      "title": "Salada Italiana",
                      "price": 28.40,
                      "description": "Tomates frescos, queijo mozzarella e manjericão com azeite extra virgem.",
                      "id": 2
                  },
                  {
                      "photo": "/salada.png",
                      "title": "Prugna Pie",
                      "price": 79.97,
                      "description": "Torta doce com recheio de ameixa e cobertura crocante.",
                      "id": 3
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
                      "description": "Delicioso prato de bacon defumado servido com ervas frescas.",
                      "id": 4
                  },
                  {
                      "photo": "/queijo.png",
                      "title": "Queijo Mineiro",
                      "price": 46.70,
                      "description": "Queijo artesanal acompanhado de goiabada caseira.",
                      "id": 5
                  },
                  {
                      "photo": "/torta.png",
                      "title": "Torta Pataquera",
                      "price": 16.75,
                      "description": "Torta salgada com recheio de carne e vegetais.",
                      "id": 6
                  },
                  {
                      "photo": "/cake2.png",
                      "title": "Homer Cake",
                      "price": 6.70,
                      "description": "Um bolo doce com glacê colorido e recheio cremoso.",
                      "id": 7
                  }
              ]
            },
            "drinks": {
              "title": "Bebidas",
              "data": [
                  {
                      "photo": "/iceTea.png",
                      "title": "Chá Gelado",
                      "price": 14.57,
                      "description": "Chá preto com limão, servido gelado para refrescar.",
                      "id": 8
                  },
                  {
                      "photo": "/iceTea2.png",
                      "title": "Chá de Canela",
                      "price": 13.24,
                      "description": "Chá aromático de canela, ideal para dias frios.",
                      "id": 9
                  },
                  {
                      "photo": "/capuccino.png",
                      "title": "Capuccino",
                      "price": 9.80,
                      "description": "Mistura cremosa de café com leite e chocolate.",
                      "id": 10
                  }
              ]
            } 
        }
        
        response.status(200).json(dishes);
    }
  }
  
  module.exports = DishesController;  