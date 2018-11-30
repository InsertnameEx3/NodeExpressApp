const express = require('express');
let router = express.Router();
const notes = require('.././notes.js');

let note = notes.fetchNotes();

//Als get route / is ga naar de index pagina met alle notes
router.get('/', function(req, res, next) {
  res.render('index', { notes: note});
});

module.exports = router;
