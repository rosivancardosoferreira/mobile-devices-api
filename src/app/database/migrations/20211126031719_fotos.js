const { Knex } = require("knex");

exports.up = function(knex) {
    return knex.schema.createTable("fotos", (table) => {
        table.increments("id").primary();
        table.string("url", 100).notNullable();
        //foreign key
        table.integer("item_id").notNullable().unsigned();
        table
            .foreign("item_id")
            .references("id")
            .inTable("items")
            .onDelete("CASCADE");

        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("fotos");
};
