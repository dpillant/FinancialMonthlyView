import React from 'react';
import TotalAmountHeader from '../TotalAmount/TotalAmountHeader';
import TotalAmountLine from '../TotalAmount/TotalAmountLine';
import './MonthFooter.css';

const MonthFooter = props =>{
    return (
    <div className="month-footer-div">
        <table className="month-footer-table">
            <TotalAmountHeader />
            <TotalAmountLine monthlyDebit={props.monthlyDebit} monthlyCredit={props.monthlyCredit} monthlyExtraDebit={props.monthlyExtraDebit} monthlyExtraCredit={props.monthlyExtraCredit}/>
        </table>
    </div>
    );
};
export default MonthFooter;