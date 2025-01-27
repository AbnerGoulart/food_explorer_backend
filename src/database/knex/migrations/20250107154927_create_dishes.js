/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("dishes", table => {
  table.increments("id");
  table.text("title");
  table.text("description");
  table.text("photo");
  table.float("price");
  table.text("section");
  table.text("section_title");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = knex => knex.schema.dropTable("dishes");