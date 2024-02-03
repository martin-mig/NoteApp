const {connection} = require("./database/connection");
const express = require("express");
const cors = require("cors");

//database connection
connection();
//create server
const app = express();
//configure cors
app.use(cors());

app.use(express.json())

//load routes
const NotesRoutes = require("./routes/note");
const NotesArchivedRoutes = require("./routes/note_archived");

app.use("/api", NotesRoutes);
app.use("/api", NotesArchivedRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`---------- Server running on port ${port}`);
});