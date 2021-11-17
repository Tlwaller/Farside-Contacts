require("dotenv").config();
const express = require('express');
const session = require('express-session');
const { Client } = require('pg');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const authController = require('./Controllers/auth controller');
const clientsController = require('./Controllers/clients controller');

const app = express();
app.use(express.json());

const client = new Client({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
});
client.connect();
app.set('db', client);


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 3
    }
}))

//authorization endpoints
app.get("/auth/user", authController.getUser);
app.post("/auth/register", authController.registerUser);
app.post("/auth/login", authController.loginUser);
app.post("/auth/logout", authController.logoutUser);

//clients endpoints
app.get("/api/clients", clientsController.getClients);

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}.`))