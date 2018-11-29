let express = require('express');
let bodyParser = require('body-parser');

let app = express();

var indexRouter = require('../routes/index');
let router = express.Router();
const notes = require('.././notes.js');




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



router.post('/', function(req, res, next) {
    let title =req.body.title;

    let del = notes.delNote(title);

  res.redirect('/');
});



module.exports = router;
