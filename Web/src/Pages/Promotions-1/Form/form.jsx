import React from 'react';
import { useParams } from 'react-router-dom';

import PromotionFormu from '../../../components/Promotion/Formu/formu.jsx';
import UiContainer from '../../../components/UI/Container/container.jsx';

const PromotionPagesForm = () => {
   const {id} = useParams();
    return ( 
        <>
        <UiContainer>
           <PromotionFormu id={id ? Number.parseInt(id, 10):null} />
        </UiContainer>
        </>
     );
}
 
export default PromotionPagesForm;