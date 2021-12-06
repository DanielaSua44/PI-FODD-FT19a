import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import './AllCards.css'

export const Allcards = ({recipes}) => {

    return (
        <div className='recipes-home'>
            {
                recipes?recipes.map(el =>
                    <Link style={{textDecoration:'none'}} to={`/details/` + el.id} key={el.id}>
                        < Cards image={el.img} diets={el.types} id={el.id} name={el.name} />
                    </Link>
                ):<h3>...Loading</h3>

            }
        </div>
    )

};

export default Allcards;