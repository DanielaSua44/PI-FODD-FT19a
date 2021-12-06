import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes,setName} from '../../Redux/actions';
import './Search.css';


export function SearchBar() {
    const dispatch = useDispatch()
    const [input,setInput] = useState("")


    const handleOnChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        console.log(input)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(setName(input))
        dispatch(getRecipes(input)) 
        setInput('')
    }

    
    
    return (
        <form onSubmit={onSubmit}>
            <input type='text'className="InputSearch" placeholder='Search...'
            onChange={e => handleOnChange(e)} value={input}></input>
            <button type='submit'className="buttonSearch" >🔍</button>
           
        </form>
    )
}

export default SearchBar;