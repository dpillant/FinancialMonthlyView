import React from 'react';

import './TotalAmountLine.css';
const TotalAmountLine=props=>{
    return (
        <tbody>
            <tr>
            <td>{props.monthlyDebit}</td>
            <td>{props.monthlyCredit}</td>
            <td>{props.monthlyExtraDebit}</td>
            <td>{props.monthlyExtraCredit}</td>
            </tr>
        </tbody>
    );
};
export default TotalAmountLine;