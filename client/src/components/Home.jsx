import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getRecipes} from '../Redux/actions'
import Allcards from './Cards/Allcards';

export const Home =() => {
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getRecipes())
    },[dispatch])
    return(
        <div>
           <Allcards/>
        </div>
    )
};

export default Home;