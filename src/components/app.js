import axios from 'axios';
import React from 'react';
import Droplist from './Droplist';
import Table from './Table';

class App extends React.Component {
    state = { 
        airportCode: [],
        selectedCode: ''
    }

    async componentDidMount() {
        const response = await axios.get('https://flare-code-exercise-data.s3.amazonaws.com/airlines.json');

        this.setState({ 
            airportCode: response.data.map( c => c.Airport.Code),
        });
    }

    onCodeSelect = c => {
        console.log(c);
        this.setState({ selectedCode: c });
    };

    render() {
        return (
            <div>
                <Droplist airportCode={this.state.airportCode} onCodeSelect={this.onCodeSelect} />
                <Table selectedCode={this.state.selectedCode} />
            </div>
        );
    }
};

export default App;