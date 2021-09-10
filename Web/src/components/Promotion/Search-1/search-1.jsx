import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PromotionCards from '../Cards/cards.jsx';


const PromotionSearch_1 = () => {

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
      
      
        <div className="promotion-search__container">
          <header className="promotion-search__header">
            <h1>Promo Show</h1>
            <Link to="/create">Novo Promoção</Link>
          </header>
          
          <section className="promotion-search__input">
            <input type="search"/>
          </section>


         {promotions.map((promotion) =>(
           <PromotionCards promotion={promotion} />
           ))}
       </div>
 
           </>
     );
};
 
export default PromotionSearch_1;