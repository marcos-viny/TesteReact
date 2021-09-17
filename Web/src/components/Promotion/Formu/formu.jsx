import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './formu.css';

const inicialValue = {
    title:'',
    url:'',
    imageUrl:'',
    price:0,
}

const PromotionFormu = ({ id }) => {
    const [values, setValues] = useState( inicialValue );
    
    const history = useHistory();

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:5000/promotions/${id}`)
            .then((response) =>{
               
                setValues(response.data)
            });
        }
    },[]);

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

    //caso querira colocar um loading.
    // if(!values){
    //     return(
    //         <div>Carregando...</div>
    //     )
    // };

    return ( 
        <>

        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>

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
        </div>

        </>
     );
}
 
export default PromotionFormu;