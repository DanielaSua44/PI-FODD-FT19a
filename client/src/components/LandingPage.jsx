import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <div>
            <h1>Henry Food</h1>
            <Link to={'/home'}>
                <button>HOME</button>
            </Link>

        </div>
    )
};

export default LandingPage;