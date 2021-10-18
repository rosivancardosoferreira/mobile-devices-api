const knex = require("../database");
const userServices = require("../services/userServices");

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

            return res.status(401).json({
                message: "Error on register user.",
            });
        } catch (error) {
            next(error);
            return res.status(500).json({ message: "User not registered" });
        }
    };
}

module.exports = new UserController();