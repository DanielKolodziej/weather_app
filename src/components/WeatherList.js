import React from 'react';
import WeatherItem from './WeatherItem';

class WeatherList extends React.Component{
    render(){
        const renderedList = this.props.days.map((day) => {
            if (day.dt_txt.substring(11, 19) === "18:00:00" || day === this.props.days[0]){
            return (
                <WeatherItem
                    key={day.dt}
                    day={day}
                    onDaySelect={this.props.onDaySelect} />
            );}
        })
        return (
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
        );
    }
}
export default WeatherList;