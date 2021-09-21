import React from 'react';

import PromotionCards from '../Cards/cards.jsx';


const PromotionList = ({loading, error, promotions}) => {

    if(error){
        return( <div>Algo de errado não está certo</div>)
    }
    
    if(loading || promotions === null){
        return( <div>Carregando...</div>)
    }

    if(promotions.length === 0){
        return( <div>Nenhum resultado encontrado.</div>)
    }

        return( <div className="promotion-list">
            {promotions.map((promotion) =>(
           <PromotionCards promotion={promotion} />
           ))}
        </div>
        )
    
}
 
export default PromotionList;