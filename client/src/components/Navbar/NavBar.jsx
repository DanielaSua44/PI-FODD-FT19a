import React from "react"
import styled from 'styled-components'
import { NavLink,useHistory } from "react-router-dom"
import SearchBar from './SearchBar';
import Filteres from "../Filter/Filteres";
import './Nav.css';
const NavBarContainer = styled.div`
height: 50px;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:1rem;
background-color: #3d697a;
`
const NavBarLink = styled(NavLink)`
margin:0.5rem;
`

const NavBar = () => {
    const history =useHistory();

    const handleClick = () => {
        history.push('/')
    }
    return (
        <NavBarContainer className="Nav">

            
            <button onClick= {handleClick} className="home"> Home </button>
        
            <NavBarLink to="/create">
            <button className="buttonCreate"> NewRecipe </button>
            </NavBarLink>
            <Filteres/>
            <SearchBar />

        </NavBarContainer>
    )
}

export default NavBar