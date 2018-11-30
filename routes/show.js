let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let app = express();
const notes = require('.././notes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Gebruik get route
router.get('/', function(req, res, next) {
    //Variabel title die staat in de get route
    let title =req.query.title;

    //Toon de notitie met de titel: title door middel van de methode getNote
    let show = notes.getNote(title);

    //Selecteer de elementen titel en body en stop ze in variabelen
    let titel= show[0].title;
    let body = show[0].body;

    //Ga naar de show pagina met de variabelen title en body
    res.render('show', { title: titel, body: body})
});

module.exports = router;
