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
    },

    addClient: async (req, res) => {
        const db = req.app.get('db');
        const { client_id, client_name, address_1, address_2, website, phone } = req.body;

        await db.query(`INSERT INTO client(client_id, client_name, address_1, address_2, website, phone)
        VALUES (${client_id}, '${client_name}', '${address_1}', '${address_2}', '${website}', '${phone}');`, (err, resp) => {
            if(err) throw err;
            res.status(200).json(`Client ${client_name} added.`);
        })
    }
};