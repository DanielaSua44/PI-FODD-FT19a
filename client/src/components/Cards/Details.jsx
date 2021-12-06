import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, resetDetails } from '../../Redux/actions';
import styles from './details.module.css';

export function Details() {
    const dispatch = useDispatch()
    let { id } = useParams()
    console.log(id)
    const myRecipe = useSelector(state => state.details)
    console.log(myRecipe)
    const history = useHistory();

    useEffect(() => {
        dispatch(getDetail(id))
        return () => {
            dispatch(resetDetails())
        }
    }, [dispatch,id])

    const goToBack = () => {
        history.goBack()
    }


    return (
        <div className={styles.details}>
            <button style={{ background: '#f4651a' }} onClick={goToBack}>⏪</button>
            {

                myRecipe ?
                    <div className={styles.detailsLoad} key={myRecipe.id}>
                        <h2 className={styles.detailsInfo}> {myRecipe.name} </h2>
                        <img className={styles.detailsImg} src={myRecipe.img} alt={myRecipe.name} />
                        <h3 className={styles.detailsRating}> Score: {myRecipe.score} </h3>
                        <h3 className={styles.detailsRating}>HealthScore: {myRecipe.healthScore} </h3>

                        <strong className={styles.detailsSteps}>Steps:</strong>


                        <h4 className={styles.ratingsTypesSteps}> {myRecipe.steps?.map(e =>
                            <p className={styles.typesRatings}> {e}</p>
                        )} </h4>

                        <strong>Summary:</strong>
                        <div className={styles.titleSummary}>
                            <p> {myRecipe.summary}</p>
                        </div>

                        <strong className={styles.detailsTypes}>Diets:</strong>
                        <div >
                            {myRecipe.types?.map((e) => (
                                <div className={styles.type} key={e.id} >{e} </div>
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