import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
  return axios.get(baseUrl);
}

const getFromURL = (inUrl) => {
  return axios.get(inUrl);
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const delete_person = (id) =>
{
    return axios.delete(`${baseUrl}/${id}`)
}

export default { 
  getAll: getAll, 
  getFromURL: getFromURL,
  create: create, 
  update: update,
  delete_person: delete_person
}