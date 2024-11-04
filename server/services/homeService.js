const Notes = require("../db/notes");

const getAllNodes = () => {
    return Notes;
}

const createNote = (createNote) => {
    const alreadyCreated = Notes.find(note => note.id == createNote.id);

    if( alreadyCreated ) {
        throw new Error("Note with the same id already created.") 
    } else {
        Notes.push(createNote);
    }
}

const updateNote = (idNote, newText) => {
    const updateNote = Notes.find(note => note.id == idNote);

    return updateNote.message = newText;
}

const deleteNote = (idNote) => {

    return Notes.filter(note => note.id != idNote);
}

const getNote = (idNote) => {

    return chosedNote = Notes.find(note => note.id == idNote);
}

module.exports = {
    getAllNodes,
    getNote,
    createNote,
    updateNote,
    deleteNote
}