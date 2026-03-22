const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// API Route (Dynamic Part)
app.post("/api/greet", (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.json({ message: "Please enter your name" });
    }

    res.json({ message: `Hello, ${name}! 👋 Welcome to Azure Dynamic App` });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});