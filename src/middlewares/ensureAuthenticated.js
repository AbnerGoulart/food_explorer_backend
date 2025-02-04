const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../config/auth")

function ensureAuthenticated(request, response, next){
  const authHeader = request.headers.authorization

  if(!authHeader){
    throw new AppError("JWT Token não informado", 401)
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, authConfig.jwt.secret)
    const { user_id, type } = JSON.parse(sub)
    request.user = {
      id: Number(user_id),
      type: type
    }

    return next()
  }catch {
    throw new AppError("JWT Token inválido", 401)
  }
}

module.exports = ensureAuthenticated