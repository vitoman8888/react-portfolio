import React from "react";

function Nav(props) {

    const {menuSelected, setMenuSelected} = props;

    return (
        <ul id="topNavigationBar">
            <li 
                    key="1" 
                    className={menuSelected === "About Me" ? "topNavItemSelected" : "topNavItemPlain" }
                    onClick={() => setMenuSelected("About Me")}>
                About Me</li>
            <li 
                    key="2" 
                    className={menuSelected === "Portfolio" ? "topNavItemSelected" : "topNavItemPlain" }
                    onClick={() => setMenuSelected("Portfolio")}>
                Portfolio</li>
            <li 
                    key="3" 
                    className={menuSelected === "Contact" ? "topNavItemSelected" : "topNavItemPlain" }
                    onClick={() => setMenuSelected("Contact")}>
                Contact</li>
            <li 
                    key="4" 
                    className={menuSelected === "Resume" ? "topNavItemSelected" : "topNavItemPlain" }
                    onClick={() => setMenuSelected("Resume")}>
                Resume</li>
        </ul>
    )
}

export default Nav;