const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const wbm = require('wbm');

class UserService {
    async find_all() {
        const results = await userRepository.find_all();
        return results;
    }
    
    async create(data) {
        const { name, email, password, phone} = data;
        const hash = await bcrypt.hash(password, 10);
        let codActive = Math.floor(1000 + Math.random() * 9000);        

        const user = await userRepository.create({
            name: name,
            email: email,
            password: hash,
            phone: phone,
            code: codActive,
        });

        wbm.start().then(async () => {
            const contacts = [ phone ];
            const message = 'Seu codigo de verificação é: '+codActive;
            await wbm.send(contacts, message);
            await wbm.end();
        }).catch(
            err => console.log(err)
        );
        
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(user)
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        return user;
    }

    async activeAcount(data) {
        const result = await userRepository.check_code(data)
        
        if(result) {
            const active = await userRepository.active_acount(data)
            return active
        }
        
        return result;
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
            console.log("\n\n\n\n>>>>>>>>>>>>"+Object.values(result)+"<<<<<<<<<<<<\n\n\n\n\n")
            if(result.active)  {
                const { password, ...user } = result; //vem do banco
                const passwordIsCorrect = await bcrypt.compare(user_password, password);
                if (passwordIsCorrect) {
                    return user;
                }
            }else{
                return { error: "Usuário inativo"}
            }
        }else{
            console.log("\n\n\n\n nao era pra ta aqui \n\n\n\n\n")
        }
    }

    async enviarWhatsapp(data) {
        const { phone } = data;
        wbm.start().then(async () => {
            const contacts = [ phone ];
            const message = 'Seu codigo de ativação é: 7859';
            await wbm.send(contacts, message);
            await wbm.end();
        }).catch(
            err => console.log(err)
        );
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