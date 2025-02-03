/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("dishes", table => {
  table.increments("id").notNullable();
  table.text("title").notNullable();
  table.boolean("enabled").notNullable();
  table.text("description").notNullable();
  table.text("photo");
  table.float("price").notNullable();
  table.text("section").notNullable();
  table.text("section_title").notNullable();

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = knex => knex.schema.dropTable("dishes");