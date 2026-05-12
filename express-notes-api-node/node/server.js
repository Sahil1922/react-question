//run server: node server.js
//open browser and paste: http://localhost:3000/notes


const express = require("express");

const app = express();

// Import route
const notesRoute = require("./routes/notes");

// Middleware
app.use(express.json());

// Use route
app.use("/notes", notesRoute);

// Port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});