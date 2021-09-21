import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import PromotionList from '../../Promotion/List/list.jsx';
import useApi from '../../Utils/userApi.jsx';
import './search.css';


const PromotionSearch_1 = () => {

    const [search, setSearch] = useState('');
    const [load, loadInfo] = useApi({
      url:'http://localhost:5000/promotions',
      method:'get',
      params:{
        _embed:'comments',
        _order:'desc',
        _sort:'id',
        title_like:search || undefined,
      },
     
    });

    useEffect(() =>{
      load();
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

         <PromotionList
          promotions={loadInfo.data}
          loading={loadInfo.loading}
          error={loadInfo.error} />
         
       </div>
 
           </>
     );
};
 
export default PromotionSearch_1;