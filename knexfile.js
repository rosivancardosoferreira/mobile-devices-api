module.exports = {
    client: "pg",
    connection: {
        database: "aula",
        user: "postgres",
        password: "cosmo5060",        
        host: "127.0.0.1"
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