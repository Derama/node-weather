const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'your notes...'
}

const addNote = (title, body) => {


    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)

    debugger

    if(!duplicateNotes){
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('New note added'))
    }else{
        console.log('Note title taken! ')
    }
 
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))

    notes.forEach(note => {
        console.log(note.title)
    });
}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNotes = (title) => {
    const loadData = loadNotes()
    const notesToKeep = loadData.find((note) => note.title !== title)

    if(loadData.length > notesToKeep.length){
        console.log(chalk.green.inverse("Note Removed!"))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    } else{
        console.log(chalk.red.inverse('note not found'))
    }
}


module.exports = {
    getNotes: getNotes, 
    addNote: addNote, 
    removeNotes: removeNotes,
    listNotes: listNotes, 
    readNotes: readNotes
}