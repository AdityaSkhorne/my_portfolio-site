// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Sample data (replace with actual database integration)
const users = [
    { id: 1, email: "test@example.com", password: "password" }
];

// Login route
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.json({ message: "Login successful", user });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
