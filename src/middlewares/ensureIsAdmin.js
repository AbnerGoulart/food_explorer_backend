const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../config/auth")

function ensureIsAdmin(request, response, next) {
    if (request.user.type != "admin") {
        throw new AppError("Usuário não autorizado", 401)
    }

    return next()
}

module.exports = ensureIsAdmin