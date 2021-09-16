import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './formu.css';

const inicialValue = {
    title:'',
    url:'',
    imageUrl:'',
    price:0,
}

const PromotionFormu = () => {
    const [values, setValues] = useState(inicialValue );

    const history = useHistory();

    function onChange(ev){
        const { name,value } = ev.target;
        console.log({name, value})

        setValues({ ...values,[name]: value });
    }

    function onSubmit(ev){
        ev.preventDefault();

        axios.post('http://localhost:5000/promotions', values)
        .then(()=>{
            history.push('/');
        });
    };

    return ( 
        <>

        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>

            <form action="" onSubmit={onSubmit}>
                <div className="promotion-form__container">
                    <label htmlFor="title">Titulo</label>
                    <input id="title" name="title" type="search" onChange={onChange} />
                </div>

                <div className="promotion-form__container">
                    <label htmlFor="url">Link</label>
                    <input id="url" name="url" type="search" onChange={onChange} />
                </div>

                <div className="promotion-form__container">
                    <label htmlFor="imageUrl">imagem (URL)</label>
                    <input id="imageUrl" name="imageUrl" type="search" onChange={onChange} />
                </div>

                <div className="promotion-form__container">
                    <label htmlFor="price">preço</label>
                    <input id="price" name="price" type="number" onChange={onChange} />
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