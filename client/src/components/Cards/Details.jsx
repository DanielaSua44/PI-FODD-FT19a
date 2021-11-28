import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

export function Details() {

    let { id } = useParams()
    const [recipe, setRecipe] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios.get(`/recipes/${id}`)
            .then(allRecipes =>
                setRecipe(allRecipes.data))
        return () => {
            setRecipe(null)
        }
    }, [])

    const goToBack = () => {
        history.goBack()
    }


    return (
        <div>
            <button onClick={goToBack}>⏪</button>
            {

                recipe ?
                    <div key={recipe.id}>
                        <h2> {recipe.name} </h2>
                        <img src={recipe.img} alt={recipe.name} style={{ width: '200px', height: '200px', borderRadius: '5px' }} />
                        <h3> Score: {recipe.score} </h3>
                        <h3>HealthScore: {recipe.healthScore} </h3>

                        <strong>Steps:</strong>


                        <h4> {recipe.steps.map(e =>
                            <p> {e}</p>
                        )} </h4>

                        <strong>Summary:</strong>
                        <div >
                            <p> {recipe.summary}</p>
                        </div>

                        <strong>Diets:</strong>
                        <div >
                            {recipe.types ?.map((e) => (
                                <div key={e.id} >{e} </div>
                            ))
                            }
                        </div>
                    </div>
                    : <div>Loading...</div>
            }
        </div>
    )
}

export default Details;