import weather from '../apis/weather';
import React from 'react';
import WeatherList from './WeatherList';
import DayDetail from './DayDetail';
import SearchBar from './SearchBar';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city: '',
            days: [],
            selectedDay: null,
            err: ''
        }
    }

    componentDidMount(){
        this.onTermSubmit('Chicago');
    }

    onTermSubmit = async (term) => {
        try {
            const response = await weather.get('', {
                params: {
                    q: term
                }
            })
            console.log(`Response from App: ` ,response);
            this.setState({
                city: response.data.city.name,
                days: response.data.list,
                selectedDay: response.data.list[0],
                err: ''
            });
        }
        catch (error){
            console.log(error.response);
            this.setState({
                err: error.response.data.message
            })
        }
    }
    onDaySelect = (day) => {
        this.setState({
            selectedDay: day
        });
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <p style={this.state.err ? {color: "red"} : {color: "green"}}>{this.state.err ? `ERROR: ${this.state.err}` : `Results for: ${this.state.city}`}</p>
                <div className="ui stackable grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <DayDetail 
                                day={this.state.selectedDay} 
                                days={this.state.days}
                                city={this.state.city}/>
                        </div>
                        <div className="five wide column">
                            <WeatherList
                                days={this.state.days}
                                onDaySelect={this.onDaySelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;



