import { React } from "react";
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';


function Project(props) {

    const {menuSelected} = props;

    return (
        <main>
            {menuSelected === "About Me" ? (<About></About>) : (<> </>) }
            {menuSelected === "Contact" ? (<Contact></Contact>)  : (<> </>) }
            {menuSelected === "Portfolio" ? (<Portfolio></Portfolio>) : (<> </>)  }
            {menuSelected === "Resume" ? (<Resume></Resume>)  : (<> </>) }
        </main>
    )
}

export default Project;