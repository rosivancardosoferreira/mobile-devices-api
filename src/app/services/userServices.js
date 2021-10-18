const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

class UserRepository {
    async find_all() {
        const results = await userRepository.find_all();
        return results;
    }
    
    async create(data) {
        const { name, email, password, photo = null, qrcode = null } = data;
        const hash = await bcrypt.hash(password, 10);
        const user = await userRepository.create({
            name: name,
            email: email,
            password: hash,
            photo: photo,
            qrcode: qrcode
        });
        return user;
    }
}

module.exports = new UserRepository();