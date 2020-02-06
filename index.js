const express = require('express')
const morgan = require('morgan')
const app = express()

const cors = require('cors')
app.use(cors())

//app.use(morgan('tiny'))
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
//app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));
app.use(morgan(':method :url :status :response-time ms :body'));

app.use(express.json())
app.use(express.static('build'))



const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

let persons = [
   {
   	   id: 1,
       name: 'Arto Hellas',
       number: '040-123456' 
   },
   {
   	   id: 2,
       name: 'Ada Lovelace', 
       number: '39-44-5323523' 
   },
   { 
   	   id: 3,
   	   name: 'Dan Abramov', 
   	   number: '12-43-234345' 
   },
   { 
   	   id: 4,
   	   name: 'Mary Poppendieck', 
   	   number: '39-23-6423122' 
   }
]

let len = persons.length

const day = Date() 
//console.log(day)
/*
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)
*/
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if(person){
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.get('/info', (req, res) => {
  res.send('<p>Phonebook has info for '+ len + ' people</p><p>' + day + ',</p>')
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  //const maxId = notes.length > 0
  //  ? Math.max(...notes.map(n => n.id))
  //  :0
  if(!body.name){
    return response.status(400).json({
      error: 'name missing'
    })
  }
  if(!body.number){
    return response.status(400).json({
      error: 'number missing'
    })
  }
  const name = body.name
  const personName = persons.find(person => person.name === name)
   if(personName){
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  /*
  const note = request.body
  console.log(note)
  note.id = maxId + 1
  */
  const person ={
    id: getRandomArbitrary(1, 1000),
    name: body.name,
    number: body.number,
    
    //date: new Date(),
    //id:generateId(),
  }
  //console.log('POST person ', person)
  persons = persons.concat(person)
  response.json(person)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


//const PORT = 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})