const knex = require("../database");
const establishmentService = require("../services/establishmentService");

class EstablishmentController {
    async index(req, res, next) {
        const results = await establishmentService.find_all();
        return res.json(results);
    };

    async create(req, res, next) {
        try {
            console.log(req.body);
            const user = await establishmentService.create(req.body);
            if (user)
                return res.json({
                    message: "Establishment successfully estabelecimento!",
                });

            return res.status(400).json({
                message: "Error on register estabelecimento.",
            });
        } catch (error) {
            next(error);
            return res.status(500).json({ message: "ERRO DE SERVIDOR" });
        }
    };

    async check_email(req, res, next) {
        try {
            console.log(req.body);
            const user = await establishmentService.checkEmailAlread(req.body.email);
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
}

module.exports = new EstablishmentController();