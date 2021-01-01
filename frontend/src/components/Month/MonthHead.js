import React from 'react';
import Button from '../Button/Button';
import './MonthHead.css';

const MonthHead=props=>{
    
    return (
        <div>
        <div class="month-head-button-div">
            <table class="month-head-button-table">
                <tr>
                    <td class="month-head-button-td">
                        <Button type="submit">Nouvelle ligne</Button>
                    </td>
                    <td class="month-head-button-td">
                        <Button type="submit">Se déconnecter</Button>
                    </td> 
                </tr>
            </table>
        </div>
        <div class="month-head-div">
             <table class="month-head-table">
                 <tr>
                     <td class="month-head-back-link">{props.previousLabelMonth}</td>
                     <td class="month-head-current">{props.currentLabelMonth}</td>
                     <td class="month-head-next-link">{props.nextLabelMonth}</td>
                 </tr>
            </table>   
        </div>
        </div>
    );
};

export default MonthHead;
