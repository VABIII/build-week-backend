const router = require('express').Router();
const Users = require('./users-model');

router.get('/api/users', async (req, res) => {
    res.json(await Users.getAllUsers())
})

router.post('/api/users', async (req, res) => {
    res.status(201).json(await Users.insertUser(req.body))
})















module.exports = router































