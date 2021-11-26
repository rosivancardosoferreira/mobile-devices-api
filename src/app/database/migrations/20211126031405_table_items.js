const { Knex } = require("knex");

exports.up = function(knex) {
    return knex.schema.createTable("items", (table) => {
        table.increments("id").primary();
        table.string("name", 50).notNullable();
        table.string("description", 50).notNullable();
        //foreign key
        table.integer("user_id").notNullable().unsigned();
        table
            .foreign("user_id")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");

        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("items");
};