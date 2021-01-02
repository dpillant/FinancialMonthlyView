import React from 'react';
import './AccountLine.css';

 class AccountLine extends React.Component {
    render(){
        const date=this.props.date;
        const label=this.props.label;
        const credit=this.props.credit;
        const debit=this.props.debit;
        return (
            <tr>
                <td className="date">{date}</td>
                <td className="label">{label}</td>
                <td className="credit">{credit}</td>
                <td className="debit">{debit}</td>
                <td className="action"><img alt="Modifier" width="15px" src="modify.png"/></td>
            </tr>
        );
    }
 }

 export default AccountLine;