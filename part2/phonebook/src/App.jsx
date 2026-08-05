import { useState } from 'react'
import People from './components/People'
import Form from './components/Form'

const Input = (props) => {
  return (
    <div>
      {props.text}: <input onChange={props.handler}/>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: "991-232" }
  ]) 

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

  const onClickForm = (event) => {
    event.preventDefault()

    let found = false;
    for (let i = 0; i < persons.length; i++)
      if (persons[i].name === newName && persons[i].phone === newPhone)
      {
        alert(persons[i].name + ' is already added to phonebook')
        return;
      }

    let new_arr = [...persons, {name: newName, phone: newPhone}];
    setPersons(new_arr);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Input text = "filter shown with" handler = {handleChangeSearch}/>
      <h2>Add a new</h2>
      <Form handlerName = {handleChange} handlerPhone = {handlePhoneChange} onClick = {onClickForm} />

      <h2>Numbers</h2>
      <People persons = {persons} criteria = {searchName} />
    </div>
  )
}

export default App