import React ,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { filterScore, getTypes, orderRecipe,filterTypes } from "../../Redux/actions";



export const Filteres = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.diets)



    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])


    const handleChange = (e) => {
        dispatch(orderRecipe(e.target.value))
    };

    function handleFilterScore(e) {
        dispatch(filterScore(e.target.value))
    };

    const handleOnChange = (e) => {
        console.log(e.target.value)
        dispatch(filterTypes(e.target.value));
    }


    return (
        <div>
            <div>
                <select id="types" onChange={handleOnChange}>
                    <option value='All'>DIETS</option>
                    {
                        types.map(el => (
                            <option key={el.id} value={el.name}>{el.name} </option>)
                        )
                    }
                </select>
                <select onChange={(e) => handleChange(e)} name='orderA-Z' id=''>
                    <option value="all">ALFABETO</option>
                    <option value="asc">ASCENDENTE</option>
                    <option value="des">DESCENDENTE</option>
                </select>
                <select onChange={(e) => handleFilterScore(e)} name='score' id=''>
                    <option value="all ">PUNTUACION</option>
                    <option value="asc">ASCENDENTE</option>
                    <option value="des">DESCENDENTE</option>
                </select>
            </div>
        </div>
    )
};
export default Filteres;