import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import useApi from '../../Utils/userApi.jsx';

import './formu.css';

const inicialValue = {
    title:'',
    url:'',
    imageUrl:'',
    price:0,
}

const PromotionFormu = ({ id }) => {
    const [values, setValues] = useState(id ? null : inicialValue );
    const history = useHistory();
    const [load, loadInfo] = useApi({
        url:`http://localhost:5000/promotions/${id}`,
        method:'get',
        onCompleted: (response) =>{
            setValues(response.data);
        }
    });

    useEffect(() => {
        if(id){
           load();
        }
    },[ id ]);

    function onChange(ev){
        const { name,value } = ev.target;

        setValues({ ...values,[name]: value });
    }

    function onSubmit(ev){
        ev.preventDefault();

        const method = id ? 'put' : 'post';
         const url = id
         ? `http://localhost:5000/promotions/${id}`
         : 'http://localhost:5000/promotions'

        axios[method](url, values)
        .then(()=>{
            history.push('/');
        });
    };

    
     if(!values){
        return(
            <div>Carregando...</div>
         )
     };

    return ( 
        <>

        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>

            {!values
            ?(<div>Carregando...</div>)
            :(  
            <form action="" onSubmit={onSubmit}>
                <div className="promotion-form__container">
                    <label htmlFor="title">Titulo</label>
                    <input id="title" name="title" type="search" onChange={onChange} value={values.title} />
                </div>

                <div className="promotion-form__container">
                    <label htmlFor="url">Link</label>
                    <input id="url" name="url" type="search" onChange={onChange} value={values.url} />
                </div>

                <div className="promotion-form__container">
                    <label htmlFor="imageUrl">imagem (URL)</label>
                    <input id="imageUrl" name="imageUrl" type="search" onChange={onChange} value={values.imageUrl} />
                </div>

                <div className="promotion-form__container">
                    <label htmlFor="price">preço</label>
                    <input id="price" name="price" type="number" onChange={onChange} value={values.price} />
                </div>

                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
            )}

        </div>

        </>
     );
}
 
export default PromotionFormu;