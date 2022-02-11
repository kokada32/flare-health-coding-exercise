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

    //Filter by Selected Airlines per Month
    const selectedAirlineJan = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'January' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineFeb = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'Febuary' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineMar = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'March' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineApr = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'April' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineMay = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'May' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineJun = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'June' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineJul = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'July' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineAug = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'August' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineSep = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'September' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineOct = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'October' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineNov = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'November' && Airline.Time.Year === props.selectedYear
    });

    const selectedAirlineDec = newAirlineYearArray.filter( Airline => {
        return Airline.Time['Month Name'] === 'December' && Airline.Time.Year === props.selectedYear
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
                                props.allAirlineInfo.length > 0 && selectedAirlineJan.length > 0 ? selectedAirlineJan[0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Feb">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineFeb.length > 0 ? selectedAirlineFeb[0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Mar">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineMar.length > 0 ? selectedAirlineMar[0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Apr">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineApr.length > 0 ? selectedAirlineApr[0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="May">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineMay.length > 0 ? selectedAirlineMay[0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Jun">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineJun.length > 0 ? selectedAirlineJun[0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Jul">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineJul.length > 0 ? selectedAirlineJul[0].Statistics.Flights.Total : 0
                            }
                        </td>
                        <td data-label="Aug">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineAug.length > 0 ? selectedAirlineAug[0].Statistics.Flights.Total : 0
                            }
                        </td>
                        <td data-label="Sep">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineSep.length > 0 ? selectedAirlineSep[0].Statistics.Flights.Total : 0
                            }
                        </td>
                        <td data-label="Oct">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineOct.length > 0 ? selectedAirlineOct[0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Nov">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineNov.length > 0 ? selectedAirlineNov[0].Statistics.Flights.Total : 0 
                            }
                        </td>
                        <td data-label="Dec">
                            {
                                props.allAirlineInfo.length > 0 && selectedAirlineDec.length > 0 ? selectedAirlineDec[0].Statistics.Flights.Total : 0 
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