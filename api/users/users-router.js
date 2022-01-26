const router = require('express').Router();
const Users = require('./users-model');

router.get('/', async (req, res) => {
    res.json(await Users.getAllUsers());
});

router.post('/', async (req, res) => {
    res.status(201).json(await Users.insertUser(req.body));
});

router.get('/:user_id', (req, res, next) => {
    const { user_id } = req.params;
    Users.getUserById(user_id)
        .then(user => {
            res.json(user);
        })
        .catch(next);
});














module.exports = router;































