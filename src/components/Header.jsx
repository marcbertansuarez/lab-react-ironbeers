import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
        <Link className="header-link" to="/">Home</Link>
        </div>
    )
}

export default Header;