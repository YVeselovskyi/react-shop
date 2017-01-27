import React from 'react';

class WeatherMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {location, temp} = this.props;
        return (
            <div>
                <h2>It is {temp}&#x2103; in {location}</h2>
            </div>
        );
    }
}

export default WeatherMessage;
