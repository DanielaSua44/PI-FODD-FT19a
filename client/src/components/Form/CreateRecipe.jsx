
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTypes } from "../../Redux/actions";
import { useHistory, Link } from 'react-router-dom';
import axios from "axios";
import {
    Main, Formulario, Label, Input, ConteinerButton,
    Boton, CreateTitle, TypeCheck, Textarea
} from './formulario';
import './Form.css'



const validate = function (recipe) {
    let errors = {};
    if (!recipe.name) {
        errors.name = 'Type a name';
    } else if (/ ^ [ a-zA-ZÀ-ÿ \ s ] { 1,40 } $ /.test(recipe.name)) {
        errors.name = 'Letras y espacios, pueden llevar acentos.';
    } else {
        errors.name = '';
    }
    if (!recipe.img) {
        errors.img = ' Este campo debe contener una URL valida';
    } else {
        errors.img = '';
    }
    if (!recipe.types) {
        errors.types = 'Type a Diets'
    } else if (recipe.types.length === 0) {
        errors.types = 'Tiene que eleguir un typo de dieta'
    } else {
        errors.types = '';
    }
    if (!recipe.score) {
        errors.score = 'Type a Score';
    } else if (!/^(?!$)(?:[0-9]{1,2}|100)$/gm.test(recipe.score)) {
        errors.score = 'The score must be between 0 and 100';
    } else {
        errors.score = '';
    }

    if (!recipe.healthScore) {
        errors.healthScore = 'Type a Health Score';
    } else if (!/^(?!$)(?:[0-9]{1,2}|100)$/gm.test(recipe.healthScore)) {
        errors.healthScore = 'The Health Score must be between 0 and 100';
    } else {
        errors.healthScore = '';
    }
    if (!recipe.summary) {
        errors.summary = 'Type a Summary or Description';
    } else {
        errors.summary = '';
    }
    if (!recipe.steps) {
        errors.steps = 'Escriba los pasos a seguir separados por comas';
    } else {
        errors.steps = '';
    }
    return errors;
};


export const CreateRecipe = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const types = useSelector(state => state.diets)
    const [recipe, setRecipe] = useState({
        name: "",
        score: "",
        healthScore: "",
        summary: "",
        types: [],
        steps: [],
        img: "",
    });
    const [errors, setErrors] = useState({});


    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const handleChange = (e) => {
        if (e.target.name === 'steps') {
            setRecipe({
                ...recipe,
                steps: [...recipe.steps, e.target.value]
            })
        }
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...recipe,
            [e.target.name]: e.target.value
        }));
        console.log(recipe)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate({
            ...recipe,
            [e.target.name]: e.target.value
        }));
        axios
            .post(`/recipes`, recipe)
            .then((rep) => {
                alert('¡Reseta creada sastifactoriamente! :)');
                setRecipe({
                    name: "",
                    score: "",
                    healthScore: "",
                    summary: "",
                    types: [],
                    steps: [],
                    img: "",
                })
                history.push('/home')
            })
            .catch((error) =>
                alert('¡Oops!, an error occurred, try again'),
                history.go(0)
            );


    }
    return (
        <Main>
            <Formulario onSubmit={handleSubmit}>
                <Link style={{ textDecoration: 'none' }} to="/home">
                    <button className="containerButton">Volver</button>
                </Link>
                <div>
                    <CreateTitle id="title">Crea tu receta</CreateTitle>
                </div>

                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type='text'
                        placeholder="name"
                        name='name'
                        value={recipe.name}
                        onChange={handleChange}
                        id="name"
                        className={errors.name && 'danger'}
                    />
                    <p className={errors.name ? 'danger' : 'pass'}>
                        {errors.name}
                    </p>
                </div>
                <div>
                    <Label htmlFor="score">Score</Label>
                    <input
                        type="range"
                        max="100"
                        min="1"
                        onChange={handleChange}
                        name='score'
                        value={recipe.score}
                        step="1"
                        className={errors.score && 'danger'}
                    />
                    <h4>The score value is :{recipe.score}</h4>
                    <p className={errors.score ? 'danger' : 'pass'}>
                        {errors.score}
                    </p>
                </div>
                <div>
                    <Label htmlFor="healthScore">HealthScore</Label>
                    <input
                        type="range"
                        max="100"
                        min="1"
                        onChange={handleChange}
                        name='healthScore'
                        value={recipe.healthScore}
                        step="1"
                        className={errors.healthScore && 'danger'}
                    />
                    <h4>The healthScore value is :{recipe.healthScore}</h4>
                    <p
                        className={
                            errors.healthScore ? 'danger' : 'pass'
                        }
                    >
                        {errors.healthScore}
                    </p>
                </div>
                <div>
                    <Label htmlFor="summary">Summary</Label>
                    <Textarea
                        name="summary"
                        placeholder="summary"
                        onChange={handleChange}
                        value={recipe.summary}
                        id="summary"
                        className={errors.summary && 'danger'}
                    />
                    <p className={errors.summary ? 'danger' : 'pass'}>
                        {errors.summary}
                    </p>
                </div>
                <div>
                    <Label htmlFor='image'> Image </Label>
                    <Input
                        type="text"
                        name="img"
                        placeholder="image"
                        value={recipe.img}
                        onChange={handleChange}
                        className={errors.img && 'danger'}
                    />
                    <p className={errors.img ? 'danger' : 'pass'}>
                        {errors.img}
                    </p>
                </div>
                <div>
                    <Label htmlFor="steps">steps</Label>
                    <Textarea
                        name='steps'
                        placeholder="steps"
                        onChange={handleChange}
                        value={recipe.steps}
                        className={errors.steps && 'danger'}
                    />
                    <p className={errors.steps ? 'danger' : 'pass'}>
                        {errors.steps}
                    </p>
                </div>

                <div>
                    <Label htmlFor="types"><strong>DIETAS</strong></Label>
                    {types.map((diet) => (
                        <div key={diet.id}>
                            <TypeCheck
                                type="checkbox"
                                name="diets"
                                value={diet.id}
                                onClick={handleClick}
                            ></TypeCheck>
                            <Label name={diet} > {diet.name} </Label>
                        </div>
                    ))}
                    <p className={errors.types ? 'danger' : 'pass'}>
                        {errors.types}
                    </p>
                </div>

                <ConteinerButton>
                    <Boton type='submit' name='submit' value='Submit' onClick={handleSubmit}> Add Recipe!</Boton>
                </ConteinerButton>
            </Formulario>
        </Main>
    )
};
export default CreateRecipe;