import { useState } from 'react'

const Info = (props) => {
    return <p>{props.name} - {props.phone}</p>
}


const People = (props) => {
    let criteria = props.criteria
    
    const lower_search = criteria.toLowerCase();
    let final_search = props.persons.filter(elem => elem.name.toLowerCase().includes(lower_search));


    return (
        <div>
            {final_search.map(p => <Info key = {p.name} name = {p.name} phone = {p.phone} />)}
        </div>
    )
}

export default People