import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            term: ''
        };
    }
    onInputChange = (event) => {
        this.setState({
            term : event.target.value
        });
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
        this.setState({
            term: ''
        })
    }

    render(){
        return (
            <div className="search-ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>City Weather Search</label>
                        <i className="search icon"></i>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
