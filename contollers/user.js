const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.addUser = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new User(
                {
                    email: req.body.email,
                    password: hash
                }
            );
            user.save()
                .then(() => res.json({message: 'user registered successfully'}))
                .catch(err => res.status(404).json({error: err.message + ', User already exists!'}));
        }
        )
        .catch(err => res.status(500).json({error: err}));
};

exports.login = (req, res) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if (!user) {
                return res.status(401).json({error: 'user not found!'})
            }
            bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(401).json({error: 'Incorrect Password!'})
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: 'token'
                    })
                })
                .catch((error) => {
                    res.status(500).json({error: error})
                })
        })
        .catch((error) => {
            res.status(500).json({error: error})
        })
}

