import { useEffect, useState } from 'react'
import Connection from '../services/Connection';



const Weather = (props) => {
    const [weather, setWeather] = useState(null);

    const hook = () => {
        Connection.getFromURL("https://api.openweathermap.org/data/2.5/weather", {params: {
              q: props.city,
              appid: api_key,
              units: 'metric',
              lang: 'es'
            }})
            .then(response => setWeather(response.data))
            .catch(error => console.log(error));
    }

    useEffect(hook, []);
    console.log(weather);
}

export default Weather