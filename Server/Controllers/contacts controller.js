module.exports = {
    getClientContacts: async (req, res) => {
        const db = req.app.get('db');
        let contacts = [];

        await db.query(`SELECT * FROM client_contact`, (err, resp) => {
            if(err) throw err;
            for(let row of resp.rows) {
                contacts.push(row);
            }
            return res.status(200).json(contacts);
        });
    }
};