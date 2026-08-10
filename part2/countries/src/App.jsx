import { useEffect, useState } from 'react'
import axios from 'axios'


import Connection from './services/Connection'
import Input from "./components/Input"
import DisplayCountries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([]) 
  const [searchName, setNewSearch] = useState("");

  const handleChangeSearch = (event) => {
    //console.log("old value", searchName, "new value", event.target.value);
    setNewSearch(event.target.value);
  }

  
  
  const hook = () => {
    Connection.getAll()
    .then(response => setCountries(response.data))
  }

  useEffect(hook, []);
  return (
    <div>
      <h2>Countries</h2>
      <Input text = "find countries" handler = {handleChangeSearch}/>
      <DisplayCountries countries = {countries} searchField = {searchName}/>
    </div>
  )
}

export default App