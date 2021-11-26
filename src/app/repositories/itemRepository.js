const knex = require('../database');

class ItemRepository {
    async find_all() {
        const results = await knex('items');
        return results;
    }

    async find_one(condition) {        
        const user = await knex('items').where(condition).first();        
        return user;
    }

    async my_items(condition) {
        const data = await knex('items').where(condition);
        return data;
    }

    async create(data) {
        const result = await knex('items').insert(data);
        return result;
    }

    async update(data, id) {
        const result = await knex('items').update({ ...data, updated_at: knex.fn.now() }).where(id);
        return result;
    }

    async destroy(id) {
        const result = await knex('items').update({ deleted_at: knex.fn.now() }).where(id);
        return result;
    }

    async check_email(email) {
        const result = await knex('items').where({ email }).first();
        return result;
    }

    async check_code(code) {
        const result = await knex('items').where({ code }).first();
        return result;
    }

    async active_acount(code) {
        const result = await 
        knex('items')
        .where('code', '=', code)
        .update({
            code: '',
            active: true
        });

        return result;
    }
}

module.exports = new ItemRepository();