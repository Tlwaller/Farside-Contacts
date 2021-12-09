const fs = require('fs');
const { finished } = require('stream');
let data = fs.readFileSync('Data/clients.json');
let clients = JSON.parse(data);

module.exports = {
    getClients: async (req, res) => {
        return res.status(200).json(clients);
    },

    addClient: async (req, res) => {
        let { id, name, address1, address2, website, phone, contacts, primaryContact } = req.body;
        console.log(req.body)

        if(address1 == null || address1.length === 0) address1 = "N/A";
        if(address2 == null || address2.length === 0) address2 = "N/A";
        if(website == null || website.length === 0) website = "N/A";
        if(phone == null || phone.length === 0) phone = "N/A";
        if(contacts == null || contacts.length === 0) contacts = [];
        if(primaryContact == null || primaryContact.length === 0) primaryContact = "N/A";

        if(clients.some(client => client.name === name)) {
            return res.status(401).json({
                //make this await override
                error: "A client already exists under the name " + name + "."
            })};

            const newClient = JSON.stringify([...clients, {
                id: id,
                name: name,
                address1: address1,
                address2: address2,
                website: website,
                phone: phone,
                contacts: contacts,
                primaryContact: primaryContact
            }], null, 2);

            return fs.writeFile('Data/clients.json', newClient, finished);

            function finished() {
                return res.status(200).json(`${name} added.`)
            }
    },

    removeClient: async (req, res) => {
        clients.forEach((client, index) => {
            if(client.id === req.body.id) {
                clients.splice(index, 1);
                const deleted = JSON.stringify(clients, null, 2);
                return fs.writeFile('Data/clients.json', deleted, finished);
                
                function finished() {
                    res.status(200).json(clients);
                }
            }
        });
    },

    editClient: async (req, res) => {
        const { id, name, address1, address2, website, phone, contacts, primaryContact } = req.body;
        clients.forEach((client, index) => {
            if(client.id === id) {
                clients.splice(index, 1, {
                    id: id,
                    name: name,
                    address1: address1,
                    address2: address2,
                    website: website,
                    phone: phone,
                    contacts: contacts,
                    primaryContact: primaryContact
                });
                const updated = JSON.stringify(clients, null, 2);
                return fs.writeFile('Data/clients.json', updated, finished);

                function finished() {
                    res.status(200).json(clients);
                }
            }
        })
    }
};