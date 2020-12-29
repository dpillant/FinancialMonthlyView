import React from 'react'

import './AccountLinesHeader.css'

const AccountLinesHeader=() =>{
    return (
        <thead className="accountLinesHeader-th">
            <th class="date">Date</th>
            <th class="label">Libellé</th>
            <th class="credit">Crédit</th>
            <th class="debit">Débit</th>
        </thead>
    );
};

export default AccountLinesHeader;