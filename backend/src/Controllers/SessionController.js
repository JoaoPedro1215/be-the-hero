const connection = require("../databese/connections");

module.exports = {
    async create(req, res){
        const { id } = req.body;

        const ong = await connection("ongs")
        .where("id", id)
        .select("name")
        .first();

        if(!ong){
            res.status(400).json({error: "No ONGS foud with this ID"})
        }

        return res.json(ong);
    }
}