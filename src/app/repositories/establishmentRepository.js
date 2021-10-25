const knex = require('../database');
class EstablishmentRepository {
    async find_all() {
        const results = await knex('establishments');
        return results;
    }

    async find_one(condition) {
        const user = await knex('establishments').where(condition).first();
        const { user_password, ...data } = user;
        return data;
    }

    async create(data) {
        const user = await knex('establishments').insert(data);
        return user;
    }

    async update(data, id) {
        const user = await knex('establishments').update({ ...data, updated_at: knex.fn.now() }).where(id);
        return user;
    }

    async destroy(id) {
        const user = await knex('establishments').update({ deleted_at: knex.fn.now() }).where(id);
        return user;
    }

    async check_email(email) {
        const result = await knex('establishments').where({ email }).first();
        return result;
    }
}

module.exports = new EstablishmentRepository();