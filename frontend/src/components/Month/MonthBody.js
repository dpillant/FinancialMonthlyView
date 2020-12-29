import React from 'react';
import './MonthBody.css';
import AccountLines from '../AccountLine/AccountLines';
import AccountLinesHeader from '../AccountLine/AccountLinesHeader';

const MonthBody=()=>{
    return (
        <div class="month-body-div">
            <table class="month-body-table">
                    <AccountLinesHeader />
                    <AccountLines />
            </table>
        </div>
    );
};

export default MonthBody;