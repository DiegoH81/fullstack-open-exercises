require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT
const Note = require("./models/note")

let logger = morgan('combined')

morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})


app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));
app.use(express.json());


app.get('/', (request, response) => {
  response.send('<h1>IOW!</h1>')
})

app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
      response.json(notes)
    })
})

app.get('/api/notes/:id', (request, response) => {
   Note.findById(request.params.id).then(note => {
    response.json(note)})
})

app.delete('/api/notes/:id', (request, response) => {
  Note.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end();
    })
    .catch(error => {
      response.status(400).send({ error: 'malformatted id' });
    });
})

app.get('/info', (request, response) => {
  Note.countDocuments({}).then(count => {
    response.send(`
      <div> 
        <p>Phonebook has info for ${count} notes!</p>
        <p>${new Date()}</p>
      </div>
    `);
  });
})

app.post("/api/persons", (request, response) => {
    const body = request.body;

    if (!body.content && body.important)
        return response.status(400).json({error: "content missing"});

    const new_note = new Note({content: body.content,
                               important: body.important,})
    
    new_note.save().then(result => {
    response.status(200).json(new_note);
    mongoose.connection.close();
  })

    
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})