const knex = require("../database");
const itemService = require("../services/itemService");

class ItemController {
    async index(req, res, next) {
        const results = await itemService.find_all();
        return res.json(results);
    };

    async create(req, res, next) {
        try {
            console.log(req.body);
            const user = await itemService.create(req.body);
            if (user)
                return res.json({
                    message: "Item successfully registered!",
                });

            return res.status(400).json({
                message: "Error on register item.",
            });

        } catch (error) {
            next(error);
            return res.status(500).json({ message: "ERRO DE SERVIDOR do item" });
        }
    };



    async myItems(req, res, next) {
        const results = await itemService.myItems(req.params);
        console.log(">>>>>>>>>>>>>>>>>>>>")
        console.log(results)
        console.log("<<<<<<<<<<<<<<<<<")
        return res.json(results);
    };

}

module.exports = new ItemController();