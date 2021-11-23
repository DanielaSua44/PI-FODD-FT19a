import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';

export const Allcards = () => {
    const recipes = useSelector(state => state.recipes)
    return (
        <div>
            {
                recipes ? recipes.map(el =>
                    <div key={el.id}>
                        < Cards image={el.img} diets={el.types} id={el.id} name={el.name} />
                    </div>
                ) : <h4>...Loading</h4>

            }
        </div>
    )
};

export default Allcards;