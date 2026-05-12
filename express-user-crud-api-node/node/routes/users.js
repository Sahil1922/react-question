const express = require("express");

const router = express.Router();

// User Array
let users = [
  {
    id: 1,
    name: "Rahul",
    email: "rahul@gmail.com"
  },
  {
    id: 2,
    name: "Priya",
    email: "priya@gmail.com"
  }
];


// GET - Fetch all users
router.get("/", (req, res) => {
  res.json(users);
});


// POST - Add new user
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);

  res.json({
    message: "User added successfully",
    user: newUser
  });
});


// PUT - Update existing user
router.put("/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.json({
    message: "User updated successfully",
    user: user
  });
});


// DELETE - Remove user
router.delete("/:id", (req, res) => {

  const id = parseInt(req.params.id);

  users = users.filter((u) => u.id !== id);

  res.json({
    message: "User deleted successfully"
  });
});

module.exports = router;