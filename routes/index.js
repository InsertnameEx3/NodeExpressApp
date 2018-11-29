var express = require('express');
var router = express.Router();
const notes = require('.././notes.js');

let note = notes.fetchNotes();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { notes: note});
});

module.exports = router;
