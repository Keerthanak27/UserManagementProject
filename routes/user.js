const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: "Keerthana", age: 21 },
    { id: 2, name: "Rahul", age: 23 },
    { id: 3, name: "Ananya", age: 22 }
];

// GET all users
router.get('/', (req, res) => res.json(users));

// GET user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

// ADD user
router.post('/', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// UPDATE user
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    Object.assign(user, req.body);
    res.json(user);
});

// DELETE user
router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted successfully" });
});

module.exports = router;