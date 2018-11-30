let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let app = express();
const notes = require('.././notes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Gebruik de post route
router.post('/', function(req, res, next) {
    //Lees post verzoek titel en maak het een variabel
    let title =req.body.title;

    //Verwijder de notitie met title=title door middel van de method delNote
    let del = notes.delNote(title);

    //Redirect naar de index pagina
    res.redirect('/');
});

module.exports = router;
