import React from 'react';


class DayDetail extends React.Component{
    render(){
        if(!this.props.day){
            return <div>Loading...</div>
        }
        let imgBack = ''
        if (this.props.day.weather[0].description.indexOf('rain') !== -1){
            imgBack = 'rain';
        }else if (this.props.day.weather[0].description.indexOf('clear') !== -1){
            imgBack = 'clear';
        } else if (this.props.day.weather[0].description.indexOf('snow') !== -1){
            imgBack = 'snow';
        }
        else{
            imgBack = 'none';
        }
        const requestedHours = ["09:00:00", "12:00:00", "15:00:00", "18:00:00","21:00:00"];
        const hourlyList = this.props.days.map((item) => {
            if(item.dt_txt.substring(0, 10) === this.props.day.dt_txt.substring(0, 10) && 
                requestedHours.indexOf(item.dt_txt.substring(11, 19)) !== -1 ){
                if(item.dt_txt.substring(11, 19) !== "21:00:00"){
                    return (
                        <i key={item.dt}>{item.main.temp}, </i>
                    );
                } else {
                    return (
                        <i key={item.dt}>{item.main.temp} </i>
                    );
                }
                
            }
        });
        return (
            <div className={`ui card ${imgBack}`}>
                <div className="content">
                    <div className="header">
                        <img 
                        className="ui small circular bordered image"
                        alt="images" 
                        src={`http://openweathermap.org/img/w/${this.props.day.weather[0].icon}.png`} />
                    </div>
                    <div className="description">
                        <h3><span className="darken">Day: </span>{this.props.day.dt_txt.substring(0,10)}</h3>
                        <h3><span className="darken">City: </span>{this.props.city}</h3>
                        <h3><span className="darken">Description: </span>{this.props.day.weather[0].description}</h3>
                        <h3><span className="darken">High: </span>{this.props.day.main.temp_max}&#8457;<span className="darken">, Low:</span>{this.props.day.main.temp_min}&#8457;</h3>
                        <h4 className="darken">9AM, 12AM, 3PM, 6PM, 9PM</h4>
                        <h5>{hourlyList}</h5>
                    </div>
                </div>
            </div>
        );
    }
}
/*
const DayDetail = ({ day, city, days }) => {
    if(!day){
        return <div>Loading...</div>
    }
    let imgBack = ''
    if (day.weather[0].description.indexOf('rain') !== -1){
        imgBack = 'rain';
    }else if (day.weather[0].description.indexOf('clear') !== -1){
        imgBack = 'clear';
    }
    else{
        imgBack = 'none';
    }
    const hourlyList = days.map((item) => {
        if(item.dt_txt.substring(11, 19) === "09:00:00"){
            return (
                <i key={item.dt}>{item.main.temp}, </i>
            );
        }
    })
    return (
        <div className={`ui card ${imgBack}`}>
            <div className="content">
                <div className="header">
                    <img 
                    className="ui small circular bordered image"
                    alt="images" 
                    src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} />
                </div>
                <div className="description">
                    <h3>Day: <span className="darken">{day.dt_txt.substring(0,10)}</span></h3>
                    <h3>City: <span className="darken">{city}</span></h3>
                    <h3>Description: <span className="darken">{day.weather[0].description}</span></h3>
                    <h3>High: <span className="darken">{day.main.temp_max}&#8457;</span>, Low: {day.main.temp_min}&#8457;</h3>
                    <h4>9AM, 12AM, 3PM, 6PM, 9PM</h4>
                    {hourlyList}
                </div>
            </div>
        </div>
    );
}*/

export default DayDetail;