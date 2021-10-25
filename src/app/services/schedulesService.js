const schedulesRepository = require('../repositories/schedulesRepository');
const bcrypt = require('bcrypt');

class SchedulesRepository {
    async find_all() {
        const results = await schedulesRepository.find_all();
        return results;
    }
    
    async create(datas) {
        const {
            data,
            hour,
            description,
            establishments,
            status,
            state,
            city,
            district,
            street,
            number,
            complement,
            user_id,
            establishments_id
        } = datas;                
        const schedule = await schedulesRepository.create({
            data,
            hour,
            description,
            establishments,
            status,
            state,
            city,
            district,
            street,
            number,
            complement,
            user_id,
            establishments_id
        });
        return schedule;
    }

    async schedules_one(data) {
        const { id } = data;
        const result = await schedulesRepository.schedules_one({
            id
        });
        return result;
    }
}
module.exports = new SchedulesRepository();