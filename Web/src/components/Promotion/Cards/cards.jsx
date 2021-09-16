import React from 'react';
import { Link } from 'react-router-dom';

import './cards.css';

const PromotionCards = ({ promotion }) => {

    return ( 
        <>
        <div className="promotion-container">
            
            <div className="promotion-card">
           <img src={promotion.imageUrl} alt={promotion.title} className="promotion__img"/>
            </div>

            <h1 className="promotion__title">{promotion.title}</h1>
            <span className="promotion__price">R$ {promotion.price}</span>

            <footer className="promotion__rodape">
                {promotion.comments.length > 0 && (
                    <div className="promotion__comments-1">"{promotion.comments[0].comment}"</div>
                )}

                <div className="promotion__comments">
                {promotion.comments.length} {' '} {promotion.comments.length > 1 ? 'comentários' : 'comentário'}
                </div>

                <a href={promotion.url} target="_blank" rel="noopener noreferrer" className="promotion__link">IR PARA O SITE</a>

                <Link to={`/edit/${promotion.id}`}>Editar</Link>

            </footer>
        </div>
        </>
     );
}
 
export default PromotionCards;