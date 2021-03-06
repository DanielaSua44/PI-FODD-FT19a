import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes,unmountAllRecipes } from '../Redux/actions';
import Paginado from '../components/Pagination/Paginado'

import Allcards from './Cards/Allcards';

export const Home = () => {
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const [recipePage] = useState(9);

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
            <Paginado  recipePage={recipePage} totalRecipe={recipes.length} paginate={paginate} />
            <Allcards  recipes={currentRecipe} />

        </div>
    )
};

export default Home;