const knex = require('../database');

class UserRepository {
    async find_all() {
        const results = await knex('users');
        return results;
    }

    async find_one(condition) {        
        const user = await knex('users').where(condition).first();        
        return user;
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

    async check_code(code) {
        const result = await knex('users').where({ code }).first();
        return result;
    }

    async active_acount(code) {
        const result = await 
        knex('users')
        .where('code', '=', code)
        .update({
            code: '',
            active: true
        });

        return result;
    }
}

module.exports = new UserRepository();