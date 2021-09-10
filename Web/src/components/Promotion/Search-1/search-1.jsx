import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PromotionCards from '../Cards/cards.jsx';
import './search-1.css';


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
      <div>
      <head className="promotion__header">
            <h1>Promo show</h1>
            <Link to="/create">Nova Promoção</Link>
            <h1>opp</h1>
          </head>
      </div>
        <div className="promotion-search">

         {promotions.map((promotion) =>(
           <PromotionCards promotion={promotion} />
           ))}
       </div>
 
           </>
     );
};
 
export default PromotionSearch_1;