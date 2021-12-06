import React from "react"
import styled from 'styled-components'
import { NavLink} from "react-router-dom"
import SearchBar from './SearchBar';
import Filteres from "../Filter/Filteres";
import './Nav.css';
const NavBarContainer = styled.div`
height: 50px;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:1rem;
background-color: #1b2c3f;
border: 5px;
border-color:#a68900 20px;
`
const NavBarLink = styled(NavLink)`
margin:0.5rem;
`

const NavBar = () => {

    return (
        <NavBarContainer className="Nav">
            <NavBarLink style={{textDecoration:'none'}} to="/">
                <div className="buttonCreate"> Home </div>
            </NavBarLink>
            <NavBarLink to="/home/create">
            <button className="buttonCreate"> NewRecipe </button>
            </NavBarLink>
            <Filteres/>
            <SearchBar />

        </NavBarContainer>
    )
}

export default NavBar