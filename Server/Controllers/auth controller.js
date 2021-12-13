const bcrypt = require('bcryptjs');
const fs = require('fs');
let data = fs.readFileSync('Data/users.json');
let users = JSON.parse(data);

module.exports = {
    getUser: async (req, res) => {
        if (req.session.user) {
            res.status(200).json(req.session.user);
        } else res.status(401).json({
            error: "Please log in."
        })
    },

    registerUser: (req, res) => {
        const { username, password } = req.body;

        if(users.some(e => e.username === req.body.username)){
            return res.status(401).json({error: 'Username taken.'});
        } else {
            const salt = bcrypt.genSaltSync(10);
            bcrypt.hash(password,salt).then(hash => {
                const newUser = JSON.stringify([...users, {
                    id: users.length + 1,
                    username: username,
                    password: hash
                }], null, 2);
                
                req.session.user = {
                    id: users.length,
                    username,
                    password
                }
                
                return fs.writeFile('Data/users.json', newUser, finished);

                function finished() {
                    return res.status(200).json(req.session.user);
                };
            })
        }
        
    },

    loginUser: (req, res) => {
        const { username, password } = req.body;

        if(req.session.user) return res.status(401).json({
            error: "Already logged in."
        })

        users.map(user => {
            if(user.username === username) {
                let hash = user.password;
                bcrypt.compare(password, hash).then(match => {
                    if(match) {
                        req.session.user = {
                            user_id: user.userId,
                            username: user.username
                        };
                        return res.status(200).json(req.session.user);
                    } else {
                        res.status(403).json({
                            error: "Incorrect username or password."
                        })
                    }
                })
            }
        });
    },

    logoutUser: (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
}