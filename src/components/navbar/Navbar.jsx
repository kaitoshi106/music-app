import React from 'react';
import NavbarSearch from "./NavbarSearch";

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__inner container">
                <div className="nav__section">
                    <a className="nav__logo__text" href="/#">Music App</a>
                </div>
                <div className="nav__section">
                    <NavbarSearch />
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    
}
export default Navbar;