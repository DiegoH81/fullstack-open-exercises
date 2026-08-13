const express = require('express')
const morgan = require('morgan')
const app = express()

let logger = morgan('combined')

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}

morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})


app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));
app.use(express.json());


app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id;
  const note = notes.filter(n => n.id == id);
  response.json(note)
})

app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id;
  notes = notes.filter(n => n.id != id);
  response.status(204).end();
})

app.get('/info', (request, response) => {
  response.send(`<div> 
                     <p> Phonebook has info for ${notes.length} people!</p>
                     <p> ${new Date()} </p>
    </div>`)
})

app.post("/api/persons", (request, response) => {
    const body = request.body;

    if (!body.content && body.important)
        return response.status(400).json({error: "content missing"});

    const new_note = {id: generateId(),
                      content: body.content,
                      important: body.important };
    
    notes = notes.concat(new_note);

    response.status(200).json(new_note);
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})