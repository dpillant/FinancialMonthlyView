import React from 'react';
import Button from '../Button/Button';
import './MonthHead.css';

const MonthHead=()=>{

    return (
        <div>
        <div class="month-head-button-div">
            <Button type="submit">Se déconnecter</Button>
        </div>
        <div class="month-head-div">
             <table class="month-head-table">
                 <tr>
                     <td class="month-head-back-link">Mois précédent</td>
                     <td class="month-head-current">Janvier 2021</td>
                     <td class="month-head-next-link">Mois prochain</td>
                 </tr>
            </table>   
        </div>
        </div>
    );
};

export default MonthHead;
