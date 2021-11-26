const itemRepository = require('../repositories/itemRepository');
const Moment = require('moment');

class ItemService {
    // async find_all() {
    //     const results = await itemRepository.find_all();
    //     return results;
    // }
    
    async create(data) {
        const { name, description, phone, user_id, name_user} = data;
        const item = await itemRepository.create({
            name: name,
            description: description,
            user_id: user_id
        });
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(item)
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        
        function formatDate () {
            let now = new Date();
            let dayName = new Array(
            'Domingo',
            'Segunda-feira',
            'Terça-feira',
            'Quarta-feira',
            'Quinta-feira',
            'Sexta-feira',
            'Sábado'
            );
            let monName = new Array(
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
            );
            let format =
            dayName[now.getDay()] +
            ', ' +
            now.getDate() +
            ' de ' +
            monName[now.getMonth()] +
            ' de ' +
            now.getFullYear() +
            ' às ' +
            now.getHours() +
            ":"+
            now.getMinutes();
            return format;
        };


        const wbm = require('wbm');
        wbm.start().then(async () => {
            const contacts = [ phone ];
            const message = "💪🤖🦾\n\nOlá, *"+name_user+"*, você fez um cadastro.\n*Item:* "+name+
                "\n*Descrição:* "+description+
                "\n\nRegistro realizado em:  "+formatDate();
            await wbm.send(contacts, message);
            await wbm.end();
        }).catch(
            err => console.log(err)
        );
        


        return item;
    }


    async myItems(data) {
        const { id } = data;
        const result = await itemRepository.my_items({
            user_id : id
        });
        return result;
    }
}

module.exports = new ItemService();