import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PromotionList from '../../Promotion/List/list.jsx';
import './search.css';


const PromotionSearch_1 = () => {

    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() =>{

       const params = {};
       if(search){
         params.title_like = search
       }

        axios.get('http://localhost:5000/promotions?_embed=comments', { params })
        .then((response) =>{
          setPromotions(response.data);
          console.log(response.data)
        });
    
      },[search]);

    return ( 

      <>
      

        <div className="promotion-search__container">

          <header className="promotion-search__header">
            <h1>Promo Show</h1>
            <Link to="/create">Novo Promoção</Link>
          </header>
          
          <section className="promotion-search__input">

            <input
            type="search"
            placeholder="Buscar"
            value={search}
            onChange={(ev) =>{setSearch(ev.target.value)}
            }
            />

          </section>

         <PromotionList promotions={promotions}loading={!promotions.length} />
         
       </div>
 
           </>
     );
};
 
export default PromotionSearch_1;