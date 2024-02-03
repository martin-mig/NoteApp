const NotesArchived = require ("../models/note_archived");

const getNotes = async (req, res) => {
    await NotesArchived.sync();
    const notes = await NotesArchived.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: notes,
    });
};

// const  async (req, res) => {
//     const id = req.params.note_id;
//     const note = await Notes.findOne({
//         where: {
//             id: id,
//         },
//     });
//     res.status(200).json({
//         ok: true,
//         status: 200,
//         body: note,
//     });
// });

const addNote = async (req, res) => {
    const dataNotes = req.body;
    console.log("recibido post - body " + JSON.stringify(dataNotes));
    await NotesArchived.sync();
    const createNote = await NotesArchived.create({
        title: dataNotes.title,
        content: dataNotes.content,
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Note",
    });
}

const editNote = async (req, res) => {
    const dataNotes = req.body;
    const updateNote = await NotesArchived.update(
        {
            title: dataNotes.title,
            content: dataNotes.content,
        },
        {
            where: {
                id: dataNotes.id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateNote,
    });
};

const deleteNote = async (req, res) => {
    const id = req.body.id;
    const deleteNote = await NotesArchived.destroy({
        where: {
            id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 204,
        body: deleteNote,
    });
};

module.exports = {
    getNotes,
    addNote,
    editNote,
    deleteNote
}