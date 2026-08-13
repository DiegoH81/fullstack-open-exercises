const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const phone = process.argv[4]

//const url = `mongodb+srv://diegohidalgo:${password}@cluster0.lqfgv92.mongodb.net/?appName=Cluster0`
const url = `mongodb+srv://diegohidalgo:${password}@cluster0.lqfgv92.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const personSchema = new mongoose.Schema({
  name: String,
  phone: String,
})

const Person = mongoose.model('Person', personSchema)

if (name != undefined && phone !== undefined)
{
   const person = new Person({
    name: name,
    phone: phone,
    })

    person.save().then(result => {
    console.log('person saved!')
    mongoose.connection.close()
    })
}
else
{
    Person.find({}).then(result => {
    result.forEach(p => {
        console.log(p.name, p.phone)
    })
    mongoose.connection.close()
    })
}



/*
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/
