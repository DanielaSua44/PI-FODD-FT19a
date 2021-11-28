import React from 'react';
import { Link } from 'react-router-dom';
import Filteres from '../Filter/Filteres';
import Cards from './Cards';

export const Allcards = ({recipes}) => {

    return (
        <div>
            <Filteres/>
            {
                recipes?recipes.map(el =>
                    <Link to={`/details/${el.id}`} key={el.id}>
                        < Cards image={el.img} diets={el.types} id={el.id} name={el.name} />
                    </Link>
                ):<h3>...Loading</h3>

            }
        </div>
    )

};

export default Allcards;