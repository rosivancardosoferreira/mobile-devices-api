const establishmentRepository = require('../repositories/establishmentRepository');
const bcrypt = require('bcrypt');

class EstablishmentService {

    async find_all() {
        const results = await establishmentRepository.find_all();
        return results;
    }
    
    async create(data) {
        const { name, email, password} = data;
        const hash = await bcrypt.hash(password, 10);
        const user = await establishmentRepository.create({
            name: name,
            email: email,
            password: hash,
        });
        return user;
    }

    async checkEmailAlread(data) {
        const result = await establishmentRepository.check_email(data)
        return result;
    }
}

module.exports = new EstablishmentService();