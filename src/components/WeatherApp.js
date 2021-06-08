import React from 'react';
import '../css/WeatherApp.css';
import Footer from './Footer'
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { FaTemperatureLow } from "react-icons/fa";

export default function WeatherAppComponent(props) {


    return (


        <div>
            <div className="background">
                <div className="form">
                    <div><h1><u>Weather forecast</u></h1></div>
                    <br></br>
                    <input placeholder="Please enter location" type="text" id="name"/>&nbsp;<button classname="button" onClick={event => {
                        event.preventDefault();
                        props.getWeather(document.getElementById("name").value)
                    }}>Search</button>
                    <br></br>
                    <br></br>
                    {props.city !== undefined ? props.city.map(element => { return <div className="text-size">{element.Name}, {element.Country}<br></br><br></br><FaTemperatureLow className="icon-temp"/>&nbsp;{element.Temp}ºC<br></br><BiWind className="icon-wind"/>&nbsp;{element.WindSpeed}km/h&nbsp;<WiHumidity className="icon-humidity"/>&nbsp;{element.Humidity}%<br></br><br></br>{element.Text}<br></br><img src={element.Icon} alt="weather" width="150" height="150"/></div> }) : null}
                </div>
                <Footer />
            </div>
        </div>
    )
}