import React from "react";
import Nav from '../Nav';
import myName from '../../assets/VitoVittorePortfolioName.png'

function Header(props) {

    return (
        <header>
            <img id="myHeaderName" src={myName} alt="Vito Vittore" />
            <Nav
                menuSelected={props.menuSelected}
                setMenuSelected={props.setMenuSelected}            
            ></Nav>
        </header>
    )
}

export default Header;