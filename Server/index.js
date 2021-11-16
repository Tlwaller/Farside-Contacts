require("dotenv").config();
const express = require('express');
const { Client } = require('pg');

const { SERVER_PORT, CONNECTION_STRING } = process.env;
const clientsController = require('./Controllers/clients controller');

const app = express();
app.use(express.json());

const client = new Client({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
});

app.set('db', client);

//clients endpoints
app.get("/api/clients", clientsController.getClients);

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}.`))