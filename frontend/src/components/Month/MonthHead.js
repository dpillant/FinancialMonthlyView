import React from 'react';
import Button from '../Button/Button';
import './MonthHead.css';

const MonthHead=props=>{
    
    return (
        <div>
        <div className="month-head-button-div">
            <table className="month-head-button-table">
                <tbody>
                <tr>
                    <td className="month-head-button-td">
                        <Button type="submit">Nouvelle ligne</Button>
                    </td>
                    <td className="month-head-button-td">
                        <Button type="submit">Se déconnecter</Button>
                    </td> 
                </tr>
                </tbody>
            </table>
        </div>
        <div className="month-head-div">
             <table className="month-head-table">
                 <tbody>
                 <tr>
                     <td className="month-head-back-link">{props.previousLabelMonth}</td>
                     <td className="month-head-current">{props.currentLabelMonth}</td>
                     <td className="month-head-next-link">{props.nextLabelMonth}</td>
                 </tr>
                 </tbody>
            </table>   
        </div>
        </div>
    );
};

export default MonthHead;
