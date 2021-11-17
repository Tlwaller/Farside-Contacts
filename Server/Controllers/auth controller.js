const bcrypt = require('bcryptjs');

module.exports = {
    getUser: async (req, res) => {
        if (req.session.user) {
            res.status(200).json(req.session.user);
        } else res.status(401).json({
            error: "Please log in."
        })
    },

    registerUser: async (req, res) => {
        const db = req.app.get('db');
        const { user_id, username, pass } = req.body;

        await db.query(`SELECT COUNT(*) FROM user_account WHERE username = '${username}'`, (err, resp) => {
            if(err) throw err;
            if(+resp.rows[0].count > 0) {
                res.status(409).json({
                    error: "Username taken."
                })
            } else {
                const salt = bcrypt.genSaltSync(10);
                bcrypt.hash(pass, salt).then(hash => {
                    db.query(`INSERT INTO user_account(user_id, username, pass)
                    VALUES (${user_id}, '${username}', '${hash}');`,(err, resp) => {
                            if(err) throw err;

                            db.query(`SELECT * FROM user_account WHERE user_id = '${user_id}'`, (err, resp) => {
                                if(err) throw err;
                                req.session.user = {
                                    user_id,
                                    username,
                                    pass
                                };
                                res.status(200).json(req.session.user);
                            })
                    })
                })
                
            }
        })

    },

    loginUser: (req, res) => {
        const db = req.app.get('db');
        const { username, pass } = req.body;

        db.query(`SELECT * FROM USER_ACCOUNT WHERE username = '${username}'`, (err, resp) => {
            if (err) throw err;
            if(resp.rowCount === 0) {
                return res.status(401).json({
                    error: "Username or password incorrect."
                })
            }
            const user = resp.rows[0];
            let hash = user.pass;
            bcrypt.compare(pass, hash).then(match => {
                if(match) {
                    req.session.user = {
                        user_id: user.user_id,
                        username,
                        pass: user.pass
                    };
                    res.status(200).json(req.session.user);
                } else {
                    res.status(401).json({
                        error: "Username or password incorrect."
                    })
                }
            })
        })
    },

    logoutUser: (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
}