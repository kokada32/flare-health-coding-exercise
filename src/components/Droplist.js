import React from 'react';

class Droplist extends React.Component {
    onCodeClick = event => {
        this.props.onCodeClick(event.target.value);
    };

    onYearClick = event => {
        this.props.onYearClick(parseInt(event.target.value));
    };
    
    render() {
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
                <select className="ui dropdown" onChange={this.onYearClick}>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                </select>
                at
                <select className="ui dropdown" onChange={this.onCodeClick}>
                    <option value="ATL">ATL</option>
                    <option value="BOS">BOS</option>
                    <option value="BWI">BWI</option>
                    <option value="CLT">CLT</option>
                    <option value="DCA">DCA</option>
                    <option value="DEN">DEN</option>
                    <option value="DFW">DFW</option>
                    <option value="DTW">DTW</option>
                    <option value="EWR">EWR</option>
                    <option value="FLL">FLL</option>
                    <option value="IAD">IAD</option>
                    <option value="IAH">IAH</option>
                    <option value="JFK">JFK</option>
                    <option value="LAS">LAS</option>
                    <option value="LAX">LAX</option>
                    <option value="LGA">LGA</option>
                    <option value="MCO">MCO</option>
                    <option value="MDW">MDW</option>
                    <option value="MIA">MIA</option>
                    <option value="MSP">MSP</option>
                    <option value="ORD">ORD</option>
                    <option value="PDX">PDX</option>
                    <option value="PHL">PHL</option>
                    <option value="PHX">PHX</option>
                    <option value="SAN">SAN</option>
                    <option value="SEA">SEA</option>
                    <option value="SFO">SFO</option>
                    <option value="SLC">SLC</option>
                    <option value="TPA">TPA</option>
                </select> 
                , 
                <select className="ui dropdown"></select>
            </div>
        );
    }
};

export default Droplist;

        //Filter airport codes from json but not optimal
        // const code = this.props.airportCode.slice(0, 29).map( c => {
        //     return <option value={c}>{c}</option>   
        // });


        // let startYear = 2003;
        // let endYear = 2016;
        // let yearArray = [];
        
        // while ( startYear <= endYear ) {
        //     yearArray.push(startYear);
        //     startYear++;
        // }
        // let year = yearArray.map( y => {
        //     return <option value={y}>{y}</option>
        // });