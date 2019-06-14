import React from 'react';

const WeatherItem = ({ day, onDaySelect }) => {
    return (
        <div onClick={()=> onDaySelect(day)} className="weather-item item">
            <img 
                className="ui image" 
                alt="images" 
                src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} />
            <div className="content">
                <div className="description">
                    <h4>{day.dt_txt.substring(0,10)}</h4>
                    <h4>{day.weather[0].description}</h4>
                    <h4>{day.main.temp} &#8457;</h4>
                </div>
            </div>
        </div>
    );
}

export default WeatherItem;