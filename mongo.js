const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

//console.log("pw ", password)

//const url = `mongodb+srv://kari:${password}@cluster0-wixy3.mongodb.net/person-app?retryWrites=true&w=majority`

const url = `mongodb+srv://personApp:${password}@cluster0-wixy3.mongodb.net/test?retryWrites=true&w=majority`

//console.log("url ", url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })




const personSchema = new mongoose.Schema({
  name: String,
  phone: String
})

const Person = mongoose.model('Person', personSchema)

if(process.argv.length<4){
   //console.log('nayta kaikki')
   //process.exit(1)

   console.log("phonebook:")
   Person.find({}).then(result => {
      result.forEach(person => {
      console.log(`${person.name} ${person.phone}`)
   })
   mongoose.connection.close()
})
}
else {

   const newName = process.argv[3]
   const newPhone = process.argv[4]
   const person = new Person({
      name: newName,
      date: newPhone
   })


   person.save().then(response => {
      console.log('added ',newName,' number ',newPhone, ' to phonebook')
      mongoose.connection.close();
   })
}
//console.log("saved ", note.content)

/*
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})*/
