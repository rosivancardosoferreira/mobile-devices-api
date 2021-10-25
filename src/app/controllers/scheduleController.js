const knex = require("../database");
const schedulesService = require("../services/schedulesService");

class SchedulesController {
    async index(req, res, next) {
        const results = await schedulesService.find_all();
        return res.json(results);
    };

    async create(req, res, next) {
        try {
            console.log(req.body);
            const schedule = await schedulesService.create(req.body);
            if (schedule)
                return res.json({
                    message: "Schedule successfully registered!",
                });

            return res.status(400).json({
                message: "Error on register schedule.",
            });
        } catch (error) {
            next(error);
            return res.status(500).json({ message: "ERRO DE SERVIDOR" });
        }
    };

    async schedules_one(req, res, next) {
        const results = await schedulesService.schedules_one(req.params);
        return res.json(results);
    };
}

module.exports = new SchedulesController();