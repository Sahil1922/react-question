//go into express-user-crud-api-node/node
//npm i
//node server.js
const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Import Routes
const userRoutes = require("./routes/users");

// Use Routes
app.use("/users", userRoutes);

// Server Port
const PORT = 3000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
