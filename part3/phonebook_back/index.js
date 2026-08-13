const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

let logger = morgan('combined')

let persons = [
    {
      "name": "amigo",
      "phone": "1",
      "id": "809FALeAsY0"
    },
    {
      "name": "asdsa",
      "phone": "dasdasdsa",
      "id": "WNUy05IRQ0I"
    },
    {
      "name": "a",
      "phone": "1",
      "id": "b_N3owJzyVg"
    },
    {
      "name": "a3",
      "phone": "12",
      "id": "aeNYX0cBstE"
    },
    {
      "name": "123",
      "phone": "asdba",
      "id": "bsmuj-j3JXI"
    },
    {
      "name": "1231",
      "phone": "aa",
      "id": "bEOK-h52yNE"
    }
  ]

const generateId = () => {
  const randomId = Math.floor(Math.random() * 1000000);
  return String(randomId);
}



app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const note = persons.filter(n => n.id == id);
  response.json(note)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  persons = persons.filter(n => n.id != id);
  response.status(204).end();
})

app.get('/info', (request, response) => {
  response.send(`<div> 
                     <p> Phonebook has info for ${persons.length} people!</p>
                     <p> ${new Date()} </p>
    </div>`)
})

app.post("/api/persons", (request, response) => {
    const body = request.body;

    if (!body.content && body.important)
        return response.status(400).json({error: "content missing"});

    let new_id = generateId();
    const new_person = {name: body.name,
                        phone: body.phone,
                        id: new_id };
    
    console.log("Id is", new_id )
    persons = persons.concat(new_person);

    response.status(200).json(new_person);
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})