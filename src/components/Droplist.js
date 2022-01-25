import React from 'react';

const Droplist = props => {
    const code = props.airportCode.map( c => {
        return <div>{c}</div>   
    })
    return (
        <div>
           {code}
        </div>
    );
};

export default Droplist;