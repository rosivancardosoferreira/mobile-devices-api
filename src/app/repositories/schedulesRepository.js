const knex = require('../database');

class SchedulesRepository {
    async find_all() {
        const results = await knex('schedules');
        return results;
    }

    async find_one(condition) {
        const user = await knex('schedules').where(condition).first();
        const { user_password, ...data } = user;
        return data;
    }

    async create(data) {
        const schedule = await knex('schedules').insert(data);
        return schedule;
    }

    async update(data, id) {
        const schedule = await knex('schedules').update({ ...data, updated_at: knex.fn.now() }).where(id);
        return schedule;
    }

    async destroy(id) {
        const schedule = await knex('schedules').update({ deleted_at: knex.fn.now() }).where(id);
        return schedule;
    }

    async check_email(email) {
        const result = await knex('schedules').where({ email }).first();
        return result;
    }


    //news
    async schedules_one(condition) {
        const data = await knex('schedules').where(condition).first();
        return data;
    }
}

module.exports = new SchedulesRepository();