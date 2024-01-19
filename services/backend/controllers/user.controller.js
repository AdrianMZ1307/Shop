const service = require('../services/').user;
const verify = require('../util/data_verifier').verify;

//* Login a user
async function login(req, res, next) {
    try {
        let params_data = Object.values(req.body);
        let params_wanted = ['username', 'password'];
        let params_received = Object.keys(req.body);

        let valid_data = verify({
            param_data: params_data,
            params_wanted: params_wanted,
            param_received: params_received,
            param_amount: params_wanted.length,
        });
        if (!valid_data) {
            return res.status(400).send("Invalid data");
        }
        let result = await service.login(req.body);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({ error: `Unexpected error in /api/signin` })
    }
}
//* Register a user
async function register(req, res, next) {
    try {
        let params_data = Object.values(req.body);
        let params_wanted = ['username', 'password', 'role_id'];
        let params_received = Object.keys(req.body);

        let valid_data = verify({
            param_data: params_data,
            params_wanted: params_wanted,
            param_received: params_received,
            param_amount: params_wanted.length,
        });
        if (!valid_data) {
            return res.status(400).send("Invalid data");
        }
        let result = await service.register(req.body);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({ error: `Unexpected error in /api/signup` })
    }
}

module.exports = {
    login, register
};
