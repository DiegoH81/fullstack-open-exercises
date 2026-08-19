import { useEffect, useState } from 'react'
import axios from 'axios'


import Connection from './services/Connection'
import People from './components/People'
import Form from './components/Form'
import Input from "./components/Input"
import Correct from "./components/Correct"


const App = () => {
  const [persons, setPersons] = useState([]) 

  const [correctMsg, setCorrect] = useState("")

  const [newPhone, setNewPhone] = useState("");
  const [newName, setNewName] = useState('');
  const [searchName, setNewSearch] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  }

  const handleChangeSearch = (event) => {
    setNewSearch(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

  const deleteHandler = (id) => {
    let confirmation = confirm("Are you sure you want to delete " + persons.find(person => person.id == id).name);
    if (!confirmation)
      return;
    Connection.delete_person(id)
    .then(response => setPersons(persons.filter(elem => elem.id != response.data.id)))
    .catch(error => {setCorrect( `Person not in json!`);
                     setTimeout(() => { setCorrect("")}, 2000);})
  }

  const onClickForm = (event) => {
    event.preventDefault()

    let found = false;
    for (let i = 0; i < persons.length; i++)
      if (persons[i].name === newName)
      {
        let confirmation = confirm(persons[i].name + ' is already added to phonebook, replace the old number with a new one?');
        if (confirmation)
        {
          let new_person = {...persons[i], phone: newPhone};

          let p_id = persons[i].id;
          Connection.update(p_id, new_person)
          .then(response => setPersons(persons.map(p => p.id != p_id ? p : new_person)));
        }
        return;
      }

    let new_person = {name: newName, phone: newPhone};

    Connection.create(new_person)
    .then(response => setPersons([...persons, response.data]))
    .catch(error => setCorrect(error.response.data.error))

    setCorrect( `Person '${new_person.name}' added!`);
    setTimeout(() => { setCorrect("")}, 2000);
  }

  const hook = () => {
    Connection.getAll()
    .then(response => setPersons(response.data))
  }

  useEffect(hook, []);
  return (
    <div>
      <Correct content = {correctMsg}/>
      <h2>Phonebook</h2>
      <Input text = "filter shown with" handler = {handleChangeSearch}/>
      <h2>Add a new</h2>
      <Form handlerName = {handleChange} handlerPhone = {handlePhoneChange} onClick = {onClickForm} />

      <h2>Numbers</h2>
      <People persons = {persons} criteria = {searchName} delete_handler = {deleteHandler} />
    </div>
  )
}

export default App