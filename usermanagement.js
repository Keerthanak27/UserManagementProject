const express = require('express');
const app = express();

app.use(express.json());

// Sample user data
let users = [
    { id: 1, name: "Keerthana", age: 21 },
    { id: 2, name: "Rahul", age: 23 },
    { id: 3, name: "Ananya", age: 22 }
];

// GET all users
app.get('/users', (req, res) => res.json(users));

// GET user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

// ADD new user
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// UPDATE user
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    Object.assign(user, req.body);
    res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted successfully" });
});

app.listen(3001, () => {
    console.log("User Management Server running on http://localhost:3001");
});