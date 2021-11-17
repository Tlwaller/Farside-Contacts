module.exports = {
    getClients: async (req, res) => {
        const db = req.app.get('db');
        let clients = [];
        await db.query('SELECT * from client', (err, resp) => {
            if(err) {
                res.status(400).json(err);
                throw err;
            }
            for (let row of resp.rows) {
                clients.push(row);
            }
            res.status(200).json(clients);
        })            
    }
};