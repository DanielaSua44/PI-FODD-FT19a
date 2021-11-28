
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTypes,postRecipe } from "../../Redux/actions";
import {useHistory} from 'react-router-dom'




export const CreateRecipe = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const types = useSelector(state => state.diets)
    const [errors, setErrors] = useState('')
    const [recipe, setRecipe] = useState({
        name: "",
        score: "",
        healthScore: "",
        img: "",
        summary: "",
        steps:"",
        types: []
    })

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const handleChange = (e) => {
        if(e.target.name === 'steps'){
            setRecipe({
                ...recipe,
                steps:[...recipe.steps,e.target.value]
            })
        }
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    };

    const handleClick = (e) => {
        if (!recipe.types.includes(e.target.value)) {
            setRecipe({
                ...recipe,
                types: [...recipe.types, e.target.value],
            });
        } else {
            const newDiet = [...recipe.types].filter((el) => el !== e.target.value);
            setRecipe({
                ...recipe,
                types: [...newDiet],
            });
        }
    };

    const handleSubmit =  (e) => {
        e.preventDefault()
        dispatch(postRecipe(recipe));
        alert("Recipe created!");
        setRecipe({
            name: "",
            score: "",
            healthScore: "",
            img: "",
            summary: "",
            steps:"",
            types: []
        })
        history.push('/home')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Name</label>
                <input type='text' name='name' value={recipe.name} onChange={handleChange} />
                <label htmlFor='image'> Image </label>
                <input type="text" name='img' placeholder="image" value={recipe.img} onChange={handleChange} />
                <label htmlFor="score">Score</label>
                <input type="range" max="100" min="1" onChange={handleChange} name='score' value={recipe.score} step="1" />
                <h4>The score value is :{recipe.score}</h4>
                <label htmlFor="healthScore">HealthScore</label>
                <input type="range" max="100" min="1" onChange={handleChange} name='healthScore' value={recipe.score} step="1" />
                <h4>The healthScore value is :{recipe.healthScore}</h4>
                <label htmlFor="summary">Summary</label>
                <textarea name='summary' onChange={handleChange} value={recipe.summary} />
                <label htmlFor="steps">steps</label>
                <textarea name='steps' onChange={handleChange} value={recipe.steps} />
                <label htmlFor="types"><strong>diets</strong></label>
                {types.map((diet) => (
                    <div key={diet.id}>
                        <input
                            type="checkbox"
                            name="diets"
                            value={diet.id}
                            onClick={handleClick}
                        ></input>
                        <label name={diet} > {diet.name} </label>
                    </div>
                ))}
                <button type='submit' name='submit' value='Submit'> Add Recipe!</button>
            </form>
        </div>
    )
};
export default CreateRecipe;