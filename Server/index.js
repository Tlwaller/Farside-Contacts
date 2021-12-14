require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

const { SERVER_PORT, SESSION_SECRET } = process.env;
const authController = require('./Controllers/auth controller');
const clientsController = require('./Controllers/clients controller');
const contactsController = require('./Controllers/contacts controller');

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieSession({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000
}));
app.use( express.static( `${__dirname}/../build` ) );

//authorization endpoints
app.get("/auth/user", authController.getUser);
app.post("/auth/register", authController.registerUser);
app.post("/auth/login", authController.loginUser);
app.post("/auth/logout", authController.logoutUser);

//clients endpoints
app.get("/api/clients", clientsController.getClients);
app.post("/api/clients", clientsController.addClient);
app.delete("/api/clients", clientsController.removeClient);
app.put('/api/clients', clientsController.editClient);

//contacts endpoints
app.get('/api/contacts', contactsController.getClientContacts);

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}.`))