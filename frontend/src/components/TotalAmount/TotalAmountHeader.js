import React from 'react';
import './TotalAmountHeader.css';

const TotalAmountHeader=()=>{
    return (
        <thead >
            <th className="totalAmoutHeader-th">Dépense mensuelle (fixe)</th>
            <th className="totalAmoutHeader-th">Recette mensuelle (fixe)</th>
            <th className="totalAmoutHeader-th">Dépense mensuelle (extra)</th>
            <th className="totalAmoutHeader-th">Recette mensuelle (extra)</th>
        </thead>
    );
};

export default TotalAmountHeader;