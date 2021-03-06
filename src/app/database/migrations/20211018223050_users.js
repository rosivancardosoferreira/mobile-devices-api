const { Knex } = require("knex");

exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("name", 50).notNullable();
        table.string("email", 50).notNullable();
        table.string("password", 60).notNullable();
        table.string("phone", 60).notNullable();
        table.string("code", 60).notNullable();
        table.boolean("active").defaultTo(false);
        table.string("token", 100);
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.fn.now())
    });
};
 
exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
