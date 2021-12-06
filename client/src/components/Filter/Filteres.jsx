import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterScore, getTypes, filterTypes, getRecipe, filterCreated } from "../../Redux/actions";
import './Filter.css'


export const Filteres = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.diets);




    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])


    const handleChange = (e) => {

        dispatch(getRecipe(e.target.value))
    };

    function handleFilterScore(e) {
        dispatch(filterScore(e.target.value))
    };

    const handleOnChange = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        dispatch(filterTypes(e.target.value));

    }

    const handleFilterCreated = (e) => {
        console.log(e.target.value)
        dispatch(filterCreated(e.target.value));
    };

    const handleReset = () => {
        dispatch(getRecipe())
    }


    return (
        <div>
            <div>
                <select className="filter" id="types" onChange={handleOnChange}>
                    <option value='All'>DIETS</option>
                    {
                        types.map(el => (
                            <option key={el.id} value={el.name}>{el.name} </option>)
                        )
                    }
                </select>
                <select className="filter" onChange={(e) => handleChange(e)} name='orderA-Z' id=''>
                    <option value="">ALFABETO</option>
                    <option value="asc">ASCENDENTE</option>
                    <option value="des">DESCENDENTE</option>
                </select>
                <select className="filter" onChange={(e) => handleFilterCreated(e)} >
                    <option value="All">AllRECIPES</option>
                    <option value="Created">Creados</option>
                    <option value="Api">De la Api</option>
                </select>
                <select className="filter" onChange={(e) => handleFilterScore(e)} name='score' id=''>
                    <option value="all ">PUNTUACION</option>
                    <option value="asc">ASCENDENTE</option>
                    <option value="des">DESCENDENTE</option>
                </select>
                <button className="filter" onClick={handleReset}>RESET</button>

            </div>
        </div>
    )
};
export default Filteres;