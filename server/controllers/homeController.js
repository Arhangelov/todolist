const router = require("express").Router();

const { errorHandler } = require("../middleware/errorHandler");
const { getAllNodes, getNote, createNote, deleteNote, updateNote } = require("../services/homeService");


router.get("/", (req, res) => {
    getAllNodes(req.body)
    .then(allNotes => {
        res.json(allNotes);
    }).catch(err => {
        errorHandler(err);
    });
});

router.get("/:idNote", (req, res) => {
    getNote(req.params.idNote)
    .then(note => {
        res.json(note);
    }).catch(err => {
        errorHandler(err);
    });
});

router.post("/create", (req, res) => {
    createNote(req.body)
    .then(notes => {
        res.json(notes);
    }).catch(err => {
        errorHandler(err);
    });
});

router.get("/delete-note/:idDeletedNote", (req, res) => {
    deleteNote(req.params.idDeletedNote)
    .then(notes => {
        res.json(notes);
    }).catch(err => {
        errorHandler(err);
    })
});

router.patch("/update-note", (req, res) => {
    updateNote(req.body)
    .then(note => {
        res.json(note);
    }).catch(err => {
        errorHandler(err);
    })
})


module.exports = router;
