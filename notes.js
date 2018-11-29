//require
const fs = require('fs');

//functions to use Modules
let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [e];
    }

};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let delNotes = (title) => {

    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    saveNotes(notes);
};

let showNotes = (note) => {
    console.log('---');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
};

//--------------------------------------------------

let getAll = () => {

    let notes = fetchNotes();
    if (notes.length === 0) {
        return 'Test';
    }
    else {
        notes.forEach(function (note) {
            return note.title;

        })
    }

};

let addNote = (title, body) => {
//node app.js add --title="" --body=""
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    //afhandelen dubbele invoer
    let dubbleNoteAllowed = notes.filter((note) => note.title === title);
    if (title.length === 0 || body.length === 0) {
        console.log('Vul alles in om een nieuwe notitie toe te voegen');
    }
    else {


        if (dubbleNoteAllowed.length === 0) {

            notes.push(note);
            saveNotes(notes);
            return note;
        }
        else {
            console.log('[notes.js] => Het bestand ' + title + ' bestaal al');
        }
    }
};

let getNote = (title) => {
    //node app.js read --title="titel"
    if (title.length === 0) {
        console.log('vul iets in om een notitie te lezen');
        process.exit();
    }
    else {


        let notes = fetchNotes();
        //select note with title
        let filterNotes = notes.filter((note) => {
            return note.title === title;
        });
        if (filterNotes.length === 0) {

            process.exit()
        }
        else {
            return filterNotes;
        }


    }

};

let delNote = (title) => {
    if (title.length === 0) {

    }
    else {


        let notes = fetchNotes();

        console.log(notes);
        let index = notes.findIndex(x => x.title === title);
        console.log(index);
        notes.splice(index, 1);
        saveNotes(notes);
    }
};

var removeByAttr = function (arr, attr, value) {

    var i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arguments.length > 2 && arr[i][attr] === value)) {

            arr.splice(i, 1);

        }
    }
    return arr;
};

module.exports = {
    //Don't forget to export new functions!!
    getAll,
    addNote,
    getNote,
    delNote,
    showNotes,
    saveNotes,
    fetchNotes,

};