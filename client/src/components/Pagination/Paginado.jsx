import React from 'react';
import styles from "./pagination.module.css"

const Paginado = ({ recipePage, totalRecipe, paginate }) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalRecipe / recipePage); i++) {
        pageNumber.push(i)
    }
    return (
        <nav className={styles.wrapper}>
            <ul className={styles.pagination}>
                {pageNumber &&
                    pageNumber.map(number => (
                        <li className={styles.pagination.active} key={number} className={styles.pageItem}> 
                            <a href="!#" onClick = {(e) =>{ e.preventDefault(); paginate(number)}} className={styles.pageLink}>{number}{""}</a>
                        </li>
                    ))
                }     
            </ul>
        </nav>
    )
}

export default Paginado;
