import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes} from '../../Redux/actions';
import './Search.css';


export function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")


    const handleOnChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(getRecipes(name)) 
        setName('')
    }

    
    
    return (
        <div>
            <input type='text'className="InputSearch" placeholder='Search...'
            onChange={e => handleOnChange(e)} value={name}></input>
            <button type='submit'className="buttonSearch" onClick={e => onSubmit(e)}>🔍</button>
           
        </div>
    )
}

export default SearchBar;