import React from 'react';
import TotalAmountHeader from '../TotalAmount/TotalAmountHeader';
import TotalAmountLine from '../TotalAmount/TotalAmountLine';
import './MonthFooter.css';

const MonthFooter =()=>{
    return (
    <div class="month-footer-div">
        <table class="month-footer-table">
            <TotalAmountHeader />
            <TotalAmountLine />
        </table>
    </div>
    );
};
export default MonthFooter;