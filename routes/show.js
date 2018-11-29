let express = require('express');
let bodyParser = require('body-parser');

let app = express();

var indexRouter = require('../routes/index');
let router = express.Router();
const notes = require('.././notes.js');




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



router.get('/', function(req, res, next) {
    let title =req.query.title;
    let show = notes.getNote(title);

    let titel= show[0].title;
    let body = show[0].body;
    console.log(show[0].title);
    console.log(show[0].body);

    res.render('show', { title: titel, body: body})
});



module.exports = router;
