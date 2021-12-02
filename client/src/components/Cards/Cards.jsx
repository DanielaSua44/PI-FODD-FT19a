import React from 'react';
import './cards.css'

export const Cards = ({ name, id, image, diets }) => {
    return (
        <div className='card'>
            <div className='card-info' key={id}>
                <h2 className='card-title'>{name}</h2>
                <h4 className='card-diets'>Diets</h4>
                {diets?.map(e => e)}
            </div>
            <div className='img-recipe'>
                <img src={image} alt="Recipe" />
            </div>
        </div>
    )
};

export default Cards;
