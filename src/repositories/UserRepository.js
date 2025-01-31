const knex = require("../database/knex")

class UserRepository {
  async findByEmail(email){
    const user = await knex("users").where("email", email).first()

    return user;
  }

  async create({ name, email, password, type }){
    const user = await knex("users").insert({ name, email, password, type })
    return { id: user.id };
  }
}

module.exports = UserRepository;