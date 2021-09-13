import React from 'react';

import PromotionCards from '../Cards/cards.jsx';


const PromotionList = ({loading, promotions}) => {
    
    if(loading){
        return( <div>Carregando...</div>)
    }else{
        return( <div className="promotion-list">
            {promotions.map((promotion) =>(
           <PromotionCards promotion={promotion} />
           ))}
        </div>
        )
    }
}
 
export default PromotionList;