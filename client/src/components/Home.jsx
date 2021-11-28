import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes,unmountAllRecipes } from '../Redux/actions';
import Paginado from '../components/Pagination/Paginado'

import Allcards from './Cards/Allcards';

export const Home = () => {
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const [recipePage, setRecipePage] = useState(9);



    useEffect(() => {
        dispatch(getRecipes())
        return () => {
            dispatch(unmountAllRecipes())
        }
    },[dispatch])

    const recipes = useSelector(state => state.recipes)
    
    const indexForLast = currentPage * recipePage;
    const indexFortFirts = indexForLast - recipePage;
    const currentRecipe = recipes.slice(indexFortFirts, indexForLast)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div>

            <NavLink to={'/create'}>
                <button> Create </button>
            </NavLink>
            <Paginado recipePage={recipePage} totalRecipe={recipes.length} paginate={paginate} />
            <Allcards recipes={currentRecipe} />

        </div>
    )
};

export default Home;