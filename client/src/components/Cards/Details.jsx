import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../Redux/actions';

export function Details() {
    const dispatch = useDispatch()
    let { id } = useParams()
    console.log(id)
    const myRecipe = useSelector(state => state.details)
    console.log(myRecipe)
    const history = useHistory();

    useEffect(() => {
       dispatch(getDetail(id))
    }, [dispatch])

    const goToBack = () => {
        history.goBack()
    }


    return (
        <div>
            <button onClick={goToBack}>⏪</button>
            {

                myRecipe ?
                    <div key={myRecipe.id}>
                        <h2> {myRecipe.name} </h2>
                        <img src={myRecipe.img} alt={myRecipe.name} style={{ width: '200px', height: '200px', borderRadius: '5px' }} />
                        <h3> Score: {myRecipe.score} </h3>
                        <h3>HealthScore: {myRecipe.healthScore} </h3>

                        <strong>Steps:</strong>


                        <h4> {myRecipe.steps?.map(e =>
                            <p> {e}</p>
                        )} </h4>

                        <strong>Summary:</strong>
                        <div >
                            <p> {myRecipe.summary}</p>
                        </div>

                        <strong>Diets:</strong>
                        <div >
                            {myRecipe.types ?.map((e) => (
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