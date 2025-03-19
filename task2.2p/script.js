const express = require("express");
const app = express();
const port = 3000;

// Route to add two numbers
app.get("/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    const sum = num1 + num2;
    res.json({ num1, num2, sum });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});