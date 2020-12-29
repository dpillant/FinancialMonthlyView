import React from 'react'

import './Month.css'


import MonthHead from './MonthHead';
import MonthBody from './MonthBody';
import MonthFooter from './MonthFooter';

const Month =()=>{
    return (
        <div>
        <MonthHead />
        <MonthBody />
        <MonthFooter />
        </div>
    );
};

export default Month;