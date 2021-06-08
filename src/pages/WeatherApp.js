import { useState , useEffect} from 'react';
import Axios from 'axios';

import WeatherApp from '../components/WeatherApp'


export default function WeatherAppContainer() {


    const [city, setCity] = useState([]);

    useEffect(() => {
        getWeather();
    }, []);


    const getWeather = (name) => {

        Axios.post('http://localhost:8000/controller.php', {
            name: name
            
        })
            .then(({ data }) => {
                console.log(data)
                setCity(data.data)
            })
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

