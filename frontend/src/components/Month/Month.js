import React from 'react'

import './Month.css'


import MonthHead from './MonthHead';
import MonthBody from './MonthBody';
import MonthFooter from './MonthFooter';

const Month = props =>{
    console.log(props.mainDate);
    const  arrayOfMonth=("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    const currentMonth=props.mainDate.getMonth();
    const currentYear=props.mainDate.getFullYear();
    
    var nextMonth=currentMonth+1;
    
    const nextDate=new Date(currentYear,nextMonth,1);
    const nextYear=nextDate.getFullYear();
    nextMonth=nextDate.getMonth();

    var prevMonth=currentMonth-1;
    const prevDate=new Date(currentYear,prevMonth,1);
    const prevYear=prevDate.getFullYear();
    prevMonth=prevDate.getMonth();


    const labelOfCurrentMonth=arrayOfMonth[currentMonth]+" "+currentYear;
    const labelOfNextMonth=arrayOfMonth[nextMonth]+" "+nextYear;
    const labelOfPrevMonth=arrayOfMonth[prevMonth]+" "+prevYear;
    return (
        <div>
        <MonthHead previousLabelMonth={labelOfPrevMonth} currentLabelMonth={labelOfCurrentMonth} nextLabelMonth={labelOfNextMonth}/>
        <MonthBody />
        <MonthFooter />
        </div>
    );
};

export default Month;