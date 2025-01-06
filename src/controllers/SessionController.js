class SessionController {
  async create (request, response) {
    if(request.body.email === "abner@email.com" && request.body.password === "1234"){
      return response.status(200).json({user: "Abner", token: "apsodksfgk"});
    } else {
      return response.status(500).json({message: "Usuário não autenticado"})
    }
  }
}

module.exports = SessionController;