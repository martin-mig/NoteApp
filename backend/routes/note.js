const router = require("express").Router();
const NoteController = require("../controllers/note");
const Notes = require("../models/note");

router.get("/notes", NoteController.getNotes);

router.post("/notes", NoteController.addNote);

router.put("/notes", NoteController.editNote);

router.delete("/notes", NoteController.deleteNote);

module.exports = router;
