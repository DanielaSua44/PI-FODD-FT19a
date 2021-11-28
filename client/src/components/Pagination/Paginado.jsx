import React from 'react'

const Paginado = ({ recipePage, totalRecipe, paginate }) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalRecipe / recipePage); i++) {
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul >
                {pageNumber &&
                    pageNumber.map(number => (
                        <li  key={number}> 
                            <a href="!#" onClick = {() => paginate(number)} >{number}</a>
                        </li>
                    ))
                }     
            </ul>
        </nav>
    )
}

export default Paginado;
