import React from 'react';
import './TotalAmountHeader.css';

const TotalAmountHeader=()=>{
    return (
        <thead >
            <th className="totalAmoutHeader-th">Dépense mensuelle (fixe)</th>
            <td className="totalAmoutHeader-th">Recette mensuelle (fixe)</td>
            <td className="totalAmoutHeader-th">Dépense mensuelle (extra)</td>
            <td className="totalAmoutHeader-th">Recette mensuelle (extra)</td>
        </thead>
    );
};

export default TotalAmountHeader;