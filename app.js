const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')


// create add command 
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'note title', 
            demandOption: true, 
            type: 'string'
        }, 
        body: {
            describe: 'note body', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command 
yargs.command({
    command: 'remove', 
    describe: 'remove an existing note', 
    builder: {
        title: {
            describe: 'remove title', 
            demandOption : true, 
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

// read command 
yargs.command({
    command: 'read', 
    describe: 'read the note',
    builder: {
        title : {
            describe: 'read the note', 
            demandOption: true, 
            type: 'string'
        }
    }, 
    handler(argv){
        notes.readNotes(argv.title)
    }
})

//list command 
yargs.command({
    command: 'list', 
    describe: 'list the notes', 
    handler(){
        notes.listNotes()
    }
})

// add, remove, edit, list 

yargs.parse();