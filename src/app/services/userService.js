const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

class UserService {
    async find_all() {
        const results = await userRepository.find_all();
        return results;
    }
    
    async create(data) {
        const { name, email, password} = data;
        const hash = await bcrypt.hash(password, 10);
        const user = await userRepository.create({
            name: name,
            email: email,
            password: hash,
        });
        return user;
    }

    async checkEmailAlread(data) {
        const result = await userRepository.check_email(data)
        return result;
    }

    async login(data) {
        const { email, user_password } = data;
        const result = await userRepository.find_one({
            email
        });

        if (result) {            
            console.log("\n\n\n\n entyrou \n\n\n\n\n")
            const { password, ...user } = result; //vem do banco
            const passwordIsCorrect = await bcrypt.compare(user_password, password);
            if (passwordIsCorrect) {
                return user;
            }
        }else{
            console.log("\n\n\n\n nao era pra ta aqui \n\n\n\n\n")
        }
    }

    async schedules(data) {
        const { id } = data;
        const result = await userRepository.schedules_all({
            user_id : id
        });
        return result;
    }
}

module.exports = new UserService();