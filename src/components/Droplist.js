import React from 'react';

class Droplist extends React.Component {
    render() {
        console.log(this.props)
        let code = this.props.airportCode.slice(0, 29).map( c => {
            return <option value={c} onClick={() => this.props.onCodeSelect(c)}>{c}</option>   
        });
    
        let startYear = 2003;
        let endYear = 2016;
        let yearArray = [];
    
        while ( startYear <= endYear ) {
            yearArray.push(startYear);
            startYear++;
        }
        let year = yearArray.map( y => {
            return <option value={y}>{y}</option>
        });
        return (
            <div>
                Show 
                <select className="ui dropdown">
                    <option value="number-of-flights">number of flights</option>
                    <option value="%-of-flights-on-time">% of flights on time</option>
                    <option value="%-of-flights-canceled">% of flights canceled</option>
                    <option value="%-of-flights-diverted">% of flights diverted</option>
                    <option value="%-of-flights-delayed">% of flights delayed</option>
                    <option value="%-of-flights-delayed-due-to-carrier-delay">% of flights delayed due to carrier delay</option>
                    <option value="%-of-flights-delayed-due-to-late-aircraft">% of flights delayed due to late-aircraft</option>
                    <option value="%-of-flights-delayed-due-to-weather">% of flights delayed due to weather</option>
                    <option value="%-of-flights-delayed-due-to-security">% of flights delayed due to security</option>
                    <option value="%-of-flights-delayed-due-to-air-traffic-control">% of flights delayed due to air traffic control</option>
                </select>
                for 
                <select className="ui dropdown">{year}</select>
                at
                <select className="ui dropdown">{code}</select> 
                , 
                <select className="ui dropdown">{code}</select>
            </div>
        );
    }
};

export default Droplist;