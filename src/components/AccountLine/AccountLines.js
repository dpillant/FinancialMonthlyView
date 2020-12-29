import React from 'react';

import './AccountLines.css';

const AccountLines = () => {
    return (
        <tbody>
            <tr>
            <td class="date">01/01/2020</td>
            <td class="label">salaire</td>
            <td class="credit">1000.00</td>
            <td class="debit">0.00</td>
            <td class="action"><img alt="Modifier" width="15px" src="modify.png"/></td>
            </tr>
            <tr>
            <td class="date">01/01/2020</td>
            <td class="label">axa</td>
            <td class="credit">0.00</td>
            <td class="debit">50.00</td>
            <td class="action"><img alt="Modifier" width="15px" src="modify.png"/></td>
            </tr>
        </tbody>
    );
  };
  
  export default AccountLines;