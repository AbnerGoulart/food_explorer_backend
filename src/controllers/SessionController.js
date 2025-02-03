const knex = require("../database/knex")
const { compare } = require("bcryptjs")
const authConfig = require("../config/auth")
const { sign } = require("jsonwebtoken")

class SessionController {
  async create (request, response) {
    const { email, password } = request.body
    const user = await knex("users").where({email}).first()

    if(!user) {
      response.status(500).json({message: "Email e/ou senha incorreta"})
      return
    }

    const passwordMatched = await compare(password, user.password)
    if(!passwordMatched) {
      response.status(500).json({message: "Email e/ou senha incorreta"})
      return
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: JSON.stringify({user_id: user.id, type: user.type}),
      expiresIn
    })

    response.status(200).json({token})
  }
}

module.exports = SessionController;