const router = require("express").Router();
const NoteArchivedController = require("../controllers/note_archived");
const NotesArchived = require("../models/note_archived");

router.get("/notes-archived", NoteArchivedController.getNotes);

router.post("/notes-archived", NoteArchivedController.addNote);

router.put("/notes-archived", NoteArchivedController.editNote);

router.delete("/notes-archived", NoteArchivedController.deleteNote);

module.exports = router;
