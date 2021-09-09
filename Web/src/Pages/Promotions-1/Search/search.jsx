import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PromotionCards from '../../../components/Promotion/Cards/cards.jsx';



const PagesPromotionSearch = () => {

  const [promotions, setPromotions] = useState([]);

  useEffect(() =>{

    axios.get('http://localhost:5000/promotions?_embed=comments')
    .then((response) =>{
      setPromotions(response.data);
      console.log(response.data)
    });

  },[]);
    return ( 
      
   <>
       <div>
         {promotions.map((promotion) =>(
           <PromotionCards promotion={promotion} />
         ))}
       </div>

   </>
      
     );
}
 
export default PagesPromotionSearch;