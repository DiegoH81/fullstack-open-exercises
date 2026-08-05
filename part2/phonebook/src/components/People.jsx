import { useState } from 'react'
import Connection from '../services/Connection'


const Info = (props) => {
    return <p>{props.name} - {props.phone} <button type="submit" onClick={props.onClick}>Delete</button></p> 
}


const People = (props) => {
    let criteria = props.criteria
    
    const lower_search = criteria.toLowerCase();
    let final_search = props.persons.filter(elem => elem.name.toLowerCase().includes(lower_search));


    return (
        <div>
            {final_search.map(p => <Info key = {p.id} name = {p.name} phone = {p.phone} onClick = {() => props.delete_handler(p.id)} />)}
        </div>
    )
}

export default People