//require
const fs = require('fs');

//functions to use Modules
//Pak alle notities van notes-data.json
let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [e];
    }

};

//Sla notities op
let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//--------------------------------------------------

let getAll = () => {

    //Neem alle notities en stop ze in een array
    let notes = fetchNotes();
    if (notes.length === 0) {
        //Error
    }
    else {
        notes.forEach(function (note) {
            return note.title;
        })
    }

};

let addNote = (title, body) => {
    //Neem alle notities en stop ze in een array
    let notes = fetchNotes();
    //Met de vorm van:
    let note = {
        title,
        body
    };

    //afhandelen dubbele invoer
    let dubbleNoteAllowed = notes.filter((note) => note.title === title);
    if (title.length === 0 || body.length === 0) {
        //Error
    }
    else {

        if (dubbleNoteAllowed.length === 0) {

            notes.push(note);
            saveNotes(notes);
            return note;
        }
        else {
            //Error
        }
    }
};

let getNote = (title) => {
    if (title.length === 0) {
        //Error
    }
    else {

        //Neem alle notities en stop ze in een array
        let notes = fetchNotes();
        //Selecteer notitie door title
        let filterNotes = notes.filter((note) => {
            return note.title === title;
        });
        if (filterNotes.length === 0) {
            //Error
        }
        else {
            return filterNotes;
        }
    }

};

let delNote = (title) => {
    if (title.length === 0) {
        //Error
    }
    else {
        //Neem alle notities en stop ze in een array
        let notes = fetchNotes();
        //Selecteer array die verwijdert moet worden door te vergelijken met de title
        let index = notes.findIndex(x => x.title === title);
        //Haal het object met de index eruit
        notes.splice(index, 1);
        saveNotes(notes);
    }
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