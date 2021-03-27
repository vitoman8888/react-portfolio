import React from "react";
import TabTitle from "../../assets/VitoVittorePortfolioResume.png";
import MyResume from '../../assets/Vito VittoreActingResume.pdf'


function Resume(props) {

    return (
        <section className="tabSection">
        <img className='tabImageHeader' src={TabTitle} alt="Resume" />
        <br />
            <a href={MyResume} download="VitoVittoreResume" className="pagePortfolioIndent">
                <button type="button" id="butDownloadResume">Download Resume</button>
            </a>
            <br />
            <h3  className="pagePortfolioIndent">Skillz that I have:</h3>
            <ul  className="pagePortfolioIndent">
                <li>React</li>
                <li>Javascript</li>
                <li>SQL</li>
                <li>O365 Power Automate</li>
                <li>O365 Power Apps</li>
                <li>C#.NET</li>
                <li>Modern Dance</li>
                <li>Underwater Basketweaving</li>
            </ul>
            <br /><br />
        </section>
    )
}

export default Resume;