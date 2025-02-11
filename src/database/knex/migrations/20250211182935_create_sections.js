/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("sections", table => {
    table.increments("id").notNullable();
    table.text("name").notNullable();
    table.text("label").notNullable();
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
  
  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  exports.down = knex => knex.schema.dropTable("sections");