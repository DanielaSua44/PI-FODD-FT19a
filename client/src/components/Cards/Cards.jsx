import React from 'react'

export const Cards = ({name,id,image,diets}) => {
    return (
        <div>
            <div key={id}>
                <h2>{name}</h2>
                <h4>Diets</h4>
                {diets?.map(e => e)}
            </div>
            <img src={image} alt="Recipe"/>
        </div>
    )
};

export default Cards;
