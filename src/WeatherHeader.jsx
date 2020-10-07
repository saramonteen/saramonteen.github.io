import React, { useEffect, useState } from 'react';
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
                    setWeather(forecast.periods);
                }
            )
    }, [])

    return (<div className='weather-header'>
        {/* <div className="weather-header"> */}
            <div>
                <img className="weather-header-image" src={require("./locationIcon.png")} alt="icon"/>
            </div>
            <div className="location">
                San Diego, CA
                <br/>
                {today}
            {/* </div> */}
        </div>
        <div className="forecast">
            
            {/* <ul style={{listStyleType: 'none', margin: '0'}}> */}
                {/* {weather.map(weatherForecast => ( */}
                {/* <li key={weatherForecast.number}> */}
                    {/* {weatherForecast.name} Forecast: */}
                    {/* <br/> */}
                    {/* {weatherForecast.detailedForecast} */}
                {/* </li> */}
                {/* ))} */}
            {/* </ul> */}
        </div>
    </div>);
}

export default Header;