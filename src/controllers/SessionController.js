class SessionController {
  async create (request, response) {
    console.log(request)
    if(request.body.email === "client@email.com" && request.body.password === "123456"){
      return response.status(200).json({user: "Abner", token: "apsodksfgk", type:"client"})
    } else if(request.body.email === "admin@email.com" && request.body.password === "123456"){
      return response.status(200).json({user:"Admin", token:"oiwer89h", type:"admin"})
    } else {
      return response.status(500).json({message: "Usuário não autenticado"})
    }
  }
}

module.exports = SessionController;