import React from 'react';
import './AccountLines.css';
import AccountLine from './AccountLine';

const AccountLines = props => {
    const rows=[];
    Object.entries(props.accountLines.accountLines).forEach(accountLine => {
        rows.push(<AccountLine date={accountLine[1].date} label={accountLine[1].label} credit={accountLine[1].credit} debit={accountLine[1].debit}/>);
    });
    return (
        <tbody>
            {rows}
        </tbody>
    );
  };
  
  export default AccountLines;