const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

//const url = `mongodb+srv://diegohidalgo:${password}@cluster0.lqfgv92.mongodb.net/?appName=Cluster0`
const url = `mongodb+srv://diegohidalgo:${password}@cluster0.lqfgv92.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)


const new_note = new Note({
content: "Browser can execute only JavaScript",
important: false,
})

new_note.save().then(result => {
console.log(new_note.content);
console.log(new_note.important);
mongoose.connection.close()
})


/*
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/
