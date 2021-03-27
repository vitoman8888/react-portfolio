import { React, useState } from "react";
import TabTitle from "../../assets/VitoVittorePortfolioPortfolio.png";


function Portfolio(props) {

    const [photos] = useState([
        {
          name: 'Batman Begins',
          repository: 'rrr',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Batman and Joker',
          repository: 'superdupercalculator',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Batman with Justice League',
          repository: 'triliogytest',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Michael Keaton Playing Batman',
          repository: 'starwarsfinal3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Lego Batman',
          repository: 'matchme2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Batman Family',
          repository: 'photo-port',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Adam West Playing Batman',
          repository: 'react-portfolio',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Batman and Shaggy',
          repository: 'pirple',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    return (
        <section className="tabSection">
            <img className='tabImageHeader' src={TabTitle} alt="Portfolio" />
            <br />

            <div className="flex-row">
            {photos.map((image, i) => (
                <div>
                    <a href={`https://github.com/vitoman8888/${image.repository}`} 
                        target="_blank" rel="noreferrer" key={image.name}>
                    <img
                        src={require(`../../assets/Portfolio/Batman/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                    </a>
                </div>
            ))}
        </div>
        <br /><br /><br />
        </section>
    )
}

export default Portfolio;