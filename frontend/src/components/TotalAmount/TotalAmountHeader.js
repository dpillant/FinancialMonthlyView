import React from 'react';
import './TotalAmountHeader.css';

const TotalAmountHeader=()=>{
    return (
        <thead >
            <tr>
            <td className="totalAmoutHeader-th">Dépense mensuelle (fixe)</td>
            <td className="totalAmoutHeader-th">Recette mensuelle (fixe)</td>
            <td className="totalAmoutHeader-th">Dépense mensuelle (extra)</td>
            <td className="totalAmoutHeader-th">Recette mensuelle (extra)</td>
            </tr>
        </thead>
    );
};

export default TotalAmountHeader;