import { React } from "react";
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';


function Main(props) {

    const {menuSelected} = props;

    return (
        <main>
            <h1>MAIN</h1>
            {menuSelected === "About Me" ? (<About></About>) : (<> </>) }
            {menuSelected === "Contact" ? (<Contact></Contact>)  : (<> </>) }
            {menuSelected === "Portfolio" ? (<Portfolio></Portfolio>) : (<> </>)  }
            {menuSelected === "Resume" ? (<Resume></Resume>)  : (<> </>) }
        </main>
    )
}

export default Main;