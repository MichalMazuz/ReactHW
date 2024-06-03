import React from "react";
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <React.Fragment>
            <Link to="home">עמוד הבית</Link>
            <Link to="list">רשימה</Link>
            <Link to="login">התחברות</Link>
        </React.Fragment>
    );
}

export default NavBar;