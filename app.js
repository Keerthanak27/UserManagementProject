const express = require('express');
const app = express();
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send("User Management Server Running 🚀");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});