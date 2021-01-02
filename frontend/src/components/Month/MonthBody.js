import React from 'react';
import './MonthBody.css';
import AccountLines from '../AccountLine/AccountLines';
import AccountLinesHeader from '../AccountLine/AccountLinesHeader';

const MonthBody=props=>{
   
    const accountLines =props.accountLines;
    console.log("MonthBody.js",accountLines);
    return (
       
        <div className="month-body-div">
            <table className="month-body-table">
                    <AccountLinesHeader />
                    <AccountLines accountLines={accountLines}/>
            </table>
        </div>
    );
};

export default MonthBody;