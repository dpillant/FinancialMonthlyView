import React from 'react'

import './AccountLinesHeader.css'

const AccountLinesHeader=() =>{
    return (
        <thead className="accountLinesHeader-th">
            <tr>
            <td className="date-header">Date</td>
            <td className="label-header">Libellé</td>
            <td className="credit-header">Crédit</td>
            <td className="debit-header">Débit</td>
            <td className="action-header">&nbsp;</td>
            </tr>
        </thead>
    );
};

export default AccountLinesHeader;