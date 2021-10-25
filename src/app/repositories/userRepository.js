const knex = require('../database');

class UserRepository {
    async find_all() {
        const results = await knex('users');
        return results;
    }

    async find_one(condition) {
        const user = await knex('users').where(condition).first();
        const { user_password, ...data } = user;
        return data;
    }

    async schedules_all(condition) {
        const data = await knex('schedules').where(condition);
        return data;
    }

    async create(data) {
        const user = await knex('users').insert(data);
        return user;
    }

    async update(data, id) {
        const user = await knex('users').update({ ...data, updated_at: knex.fn.now() }).where(id);
        return user;
    }

    async destroy(id) {
        const user = await knex('users').update({ deleted_at: knex.fn.now() }).where(id);
        return user;
    }

    async check_email(email) {
        const result = await knex('users').where({ email }).first();
        return result;
    }
}

module.exports = new UserRepository();