import axios from 'axios';
import React from 'react';
import Droplist from './Droplist';
import Table from './Table';

class App extends React.Component {
    state = { 
        allAirlineInfo: [],
        selectedCode1: "ATL",
        selectedYear: 2003,
    }

    async componentDidMount() {
        const response = await axios.get('https://flare-code-exercise-data.s3.amazonaws.com/airlines.json');

        this.setState({ 
            allAirlineInfo: response.data
        });

        
    }

    onCodeClick = (c) => {
        this.setState({ selectedCode1: c });
    };

    onYearClick = y => {
        this.setState({ selectedYear: y });
    };

    render() {
        return (
            <div>
                <Droplist 
                    onCodeClick={this.onCodeClick} 
                    onYearClick={this.onYearClick} 
                />
                <Table 
                    selectedCode1={this.state.selectedCode1} 
                    allAirlineInfo={this.state.allAirlineInfo}
                    selectedYear={this.state.selectedYear}
                />
            </div>
        );
    }
};

export default App;