import React, { useEffect, useState } from 'react';
import location from './locationIcon.png'
import './stylesheet.css';

function Header(){
    const [weather, setWeather] = useState([]);

    var currentDate = new Date();
    var today = currentDate.toLocaleDateString('default', { weekday: 'long' }) + ", " + currentDate.toLocaleString('default', {month: 'long'}) + " " + currentDate.getDate() + ", " + currentDate.getFullYear();

    useEffect( () => {
        fetch("https://api.weather.gov/zones/land/CAZ043/forecast/")
            .then(res => res.json())
            .then(
                (forecast) => {
                    setWeather(forecast.properties.periods);
                }
            )
    })

    return (<>
        <div className='weather-header'>
            <div>
                <img className="weather-header-image" src={location} alt="location icon"/>
            </div>
            <div className="location">
                San Diego, CA
                <br/>
                {today}
            </div>
            
            <div className="forecast">
                <ul style={{listStyleType: 'none', margin: '0'}}>
                    {weather && weather.map(weatherForecast => (
                    <li key={weatherForecast.number}>
                        <b>{weatherForecast.name}</b> {weatherForecast.detailedForecast}
                        <br/>
                    </li>
                    ))}
                </ul>
            </div>
        </div>    
    </>);

}


export default Header;