import React from 'react';

const Table = props => {
    //Filter by Airline Code
    const newAirlineCodeArray = props.allAirlineInfo.filter( Airline => {
        return Airline.Airport.Code === props.selectedCode1
    });
    
    //Filter by Year
    const newAirlineYearArray = newAirlineCodeArray.filter( Airline => {
        return Airline.Time.Year === props.selectedYear
    });

    //Filter by Month
    const monthsArray = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const selectedAirline = monthsArray.map( month => {
        const n = newAirlineYearArray.filter( Airline => {
            return Airline.Time['Month Name'] === month
        });
        return n
    });

    return (
        <div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Jan</th>
                        <th>Feb</th>
                        <th>Mar</th>
                        <th>Apr</th>
                        <th>May</th>
                        <th>Jun</th>
                        <th>Jul</th>
                        <th>Aug</th>
                        <th>Sep</th>
                        <th>Oct</th>
                        <th>Nov</th>
                        <th>Dec</th>
                        <th>Mean</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Name">{props.selectedCode1}</td>
                        <td data-label="Jan">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[0].length > 0 ? selectedAirline[0][0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Feb">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[1].length > 0 ? selectedAirline[1][0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Mar">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[2].length > 0 ? selectedAirline[2][0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Apr">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[3].length > 0 ? selectedAirline[3][0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="May">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[4].length > 0 ? selectedAirline[4][0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Jun">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[5].length > 0 ? selectedAirline[5][0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Jul">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[6].length > 0 ? selectedAirline[6][0].Statistics.Flights.Total : 0
                            }
                        </td>
                        <td data-label="Aug">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[7].length > 0 ? selectedAirline[7][0].Statistics.Flights.Total : 0
                            }
                        </td>
                        <td data-label="Sep">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[8].length > 0 ? selectedAirline[8][0].Statistics.Flights.Total : 0
                            }
                        </td>
                        <td data-label="Oct">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[9].length > 0 ? selectedAirline[9][0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Nov">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[10].length > 0 ? selectedAirline[10][0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Dec">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirline[11].length > 0 ? selectedAirline[11][0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Mean"></td>
                    </tr>
                    <tr>
                        <td data-label="Name"></td>
                    </tr>
                </tbody>
                </table>
        </div>
    );
};

export default Table;