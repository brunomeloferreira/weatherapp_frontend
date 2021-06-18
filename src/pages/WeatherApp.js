import { useState } from 'react';
import Axios from 'axios';

import WeatherApp from '../components/WeatherApp'


export default function WeatherAppContainer() {


    const [city, setCity] = useState([]);



    const getWeather = (name) => {

        Axios.post('http://localhost:8000/controller.php', {
            name: name
            
        })
            .then(({ data }) => {
                console.log(data)
                setCity(data.data)
            })
            .catch(error => console.log("database server offline"));    
    }


    return (
        <div>
            <WeatherApp
                getWeather={getWeather}
                city={city}
            />
        </div>
    );
};

