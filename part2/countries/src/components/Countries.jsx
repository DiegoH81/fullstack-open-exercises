import { useState } from 'react'
import ButtonJSX from './Button';

const Country = (props) => {
    let country_data = props.country;
    
    return (
        <div>
            <h1>{country_data.name.common}</h1>
            <p>Capital: {country_data.capital}</p>
            <p>Area: {country_data.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.entries(country_data.languages).map(([code, name]) => (
                    <li key={code}>{name} ({code})</li>
                ))}
            </ul>
            <img src = {country_data.flags.png} alt = {country_data.flags.alt}></img>
        </div>
    )
}


const DisplayCountries = (props) => {
    let all_countries = props.countries;
    let search_field = props.searchField.toLowerCase();
    
    let final_search = (search_field === "")? [] : all_countries.filter(elem => elem.name.common.toLowerCase().includes(search_field));
    
    if (final_search.length == 0)
        return <h3>No matching countries!</h3>;
    else if (final_search.length == 1)
        return <Country country = {final_search[0]}/>
    else if (final_search.length <= 10)
    {
        //console.log("entered if");
        return (
        <div>
            {final_search.map(elem => (
                <p id = {elem.name.common}>{elem.name.common} - <ButtonJSX text = "Show" handler = {() => props.change_name(elem.name.common)}/> </p> ))}
        </div>
        )
    }
    else return ;
}

export default DisplayCountries