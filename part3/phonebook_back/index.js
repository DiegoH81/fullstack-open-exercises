require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT
const Person = require("./models/person")


morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

let logger = morgan('combined')


app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {response.json(people)});
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  Person.findById(id).then(person => {
      response.json(person)})
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  Person.findByIdAndDelete(id)
    .then(result => {
      response.status(204).end();
    })
    .catch(error => {
      response.status(400).send({ error: 'malformatted id' });
    });
})

app.get('/info', (request, response) => {

  Person.countDocuments({}).then(count => {
      response.send(`
        <div> 
          <p>Phonebook has info for ${count} persons!</p>
          <p>${new Date()}</p>
        </div>
      `);
    });
})

app.post("/api/persons", (request, response) => {
    const body = request.body;

    if (!body.name && !body.phone)
        return response.status(400).json({error: "content missing"});

    const new_person = new Person({name: body.name,
                                   phone: body.phone,})
    
    new_person.save().then(result => {
        response.status(200).json(new_person);
      })
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError')
    return response.status(400).send({ error: 'malformatted id' })
  else if (error.name === 'ValidationError')
    return response.status(400).json({ error: error.message })

  next(error)
}

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})