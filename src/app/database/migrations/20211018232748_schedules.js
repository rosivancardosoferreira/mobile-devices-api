const { Knex } = require("knex");
exports.up = function(knex) {
    return knex.schema.createTable("schedules", (table) => {
        table.increments("id").primary();
        table.string("data").notNullable();
        table.string("hour").notNullable();
        table.string("description", 100).notNullable();
        table.string("establishments", 50).notNullable();
        table.integer("status").notNullable();
        table.string("state", 50).notNullable();
        table.string("city", 50).notNullable();
        table.string("district", 50).notNullable();
        table.string("street", 100).notNullable();
        table.string("number", 50);
        table.string("complement", 100);

        //foreign key
        table.integer("user_id").notNullable().unsigned();
        table
            .foreign("user_id")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");
            
        //foreign key
        table.integer("establishments_id").notNullable().unsigned();
        table
            .foreign("establishments_id")
            .references("id")
            .inTable("establishments")
            .onDelete("CASCADE");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("schedules");
};