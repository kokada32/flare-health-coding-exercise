import React from 'react';

const Table = props => {
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
                        <td data-label="Name">{props.selectedCode}</td>
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