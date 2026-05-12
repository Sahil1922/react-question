const express = require("express");

const router = express.Router();

// Notes Array
let notes = [
  {
    id: 1,
    title: "Study ExpressJS"
  },
  {
    id: 2,
    title: "Prepare for Exam"
  }
];

// GET Route
router.get("/", (req, res) => {
  res.json(notes);
});

// POST Route
router.post("/", (req, res) => {
  const newNote = {
    id: notes.length + 1,
    title: req.body.title
  };

  notes.push(newNote);

  res.json({
    message: "Note added successfully",
    note: newNote
  });
});

module.exports = router;