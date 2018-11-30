let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let app = express();
const notes = require('.././notes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Gebruik de post route
router.post('/', function(req, res, next) {
    //Lees post verzoeken en stop ze in een variabel
    let title =req.body.title;
    let body = req.body.body;

    //voeg notitie toe met variabelen door gebruik te maken van de method addNote
    let note = notes.addNote(title, body);

    //Redirect naar de index pagina
    res.redirect('/');
});

module.exports = router;
