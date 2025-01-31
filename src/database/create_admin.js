const bcrypt = require("bcryptjs")
const { hash } = bcrypt
const knex = require("./knex")

async function createAdmin() {
  try {
    const password = await bcrypt.hash("123456", 8);

    await knex("users").insert({
      name: "Admin",
      email: "admin@foodexplorer.com",
      type: "admin",
      password,
    });

    console.log("Admin user created successfully!");
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    await knex.destroy(); // Fecha a conexão do banco e permite que o script finalize
  }
}

createAdmin()