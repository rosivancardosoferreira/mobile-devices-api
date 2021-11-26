const knex = require("../database");
const userServices = require("../services/userService");

class UserController {
    async index(req, res, next) {
        const results = await userServices.find_all();
        return res.json(results);
    };

    async create(req, res, next) {
        try {
            console.log(req.body);
            const user = await userServices.create(req.body);
            if (user)
                return res.json({
                    message: "User successfully registered!",
                });

            return res.status(400).json({
                message: "Error on register user.",
            });
        } catch (error) {
            next(error);
            return res.status(500).json({ message: "ERRO DE SERVIDOR" });
        }
    };

    async check_email(req, res, next) {
        try {
            console.log(req.body);
            const user = await userServices.checkEmailAlread(req.body.email);
            if (!user)
                return res.json({message: "NÃO EXISTE AINDA!",});
            return res.status(400).json({
                message: "E-MAIL JÁ CADASTRADO",
            });
        } catch (error) {
            next(error);
            return res.status(500).json({ message: "ERRO DE SERVIDOR" });
        }
    };


    async check_phone(req, res, next) {
        try {
            console.log(req.body);
            const user = await userServices.activeAcount(req.body.code);
            if (user){
                return res.json({
                    message: "CODIGO VALIDO",
                });
            }        
                
            return res.status(400).json({message: "Código invalido!"});

        } catch (error) {
            next(error);
            return res.status(500).json({ message: "ERRO DE SERVIDOR" });
        }
    };
    

    async login(req, res, next) {
        try {
            console.log(req.body);
            const user = await userServices.login(req.body);
            console.log(user);
            if (user) {
                console.log("<<<<<<<<<<<<<<<<<<<<<<<<")
                console.log(user)
                console.log("<<<<<<<<<<<<<<<<<<<<<<<<")
                return res.json(user);
            }

            return res.status(401).json({
                message: "User not found.",
            });

        } catch (error) {
            next(error);
            return res.status(500).json({
                message: "Unauthorized user",
            })
        }
    }


    async whatsApp(req, res, next) {
        try {
            console.log(req.body);
            const sendMsg = await userServices.enviarWhatsapp(req.body);
            console.log(sendMsg);

            if (sendMsg) {
                console.log("Mensagem enviado com sucesso");
                return res.json(sendMsg);
            }

            return res.status(401).json({
                message: "User not found.",
            });


        } catch (error) {
            next(error);
            return res.status(500).json({
                message: "Erro no servidor",
            })
        }
    }




    async schedules(req, res, next) {
        const results = await userServices.schedules(req.params);
        return res.json(results);
    };
}

module.exports = new UserController();