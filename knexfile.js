module.exports = {
    client: "pg",
    // connection: {
    //     database: "aula",
    //     user: "postgres",
    //     password: "cosmo5060",        
    //     host: "127.0.0.1"
    // },
     connection: {
        database: "ijsrrvch",
        user: "ijsrrvch",
        password: "6DPQWdT4uuXDi8vZOYXr8K7Y_Cpc2Tgf",        
        host: "fanny.db.elephantsql.com"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
        tableName: "knex_migrations",
        directory: `${__dirname}/src/app/database/migrations`
    },
}