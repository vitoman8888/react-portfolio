import React from "react";
import linkedInLogo from "../../assets/LinkedInLogo.png"
import gitHubLogo from "../../assets/githubLogoPortfolio.png"
import targetLogo from "../../assets/TargetStoreLogo.png"

function Footer(props) {

    return (
        <footer>
            <div id="footerLinkImages" >
                <a href="https://www.linkedin.com/in/vito-vittore-ms/" target="_blank" rel="noreferrer">
                    <img src={linkedInLogo} alt="LinkedIn Logo" />
                </a> 
                <a href="https://github.com/vitoman8888" target="_blank" rel="noreferrer">
                    <img src={gitHubLogo} alt="Github Logo" />
                </a> 
                <a href="https://www.target.com" target="_blank" rel="noreferrer">
                    <img src={targetLogo} alt="Target Logo" />
                </a> 
            </div>
        </footer>
    )
}

export default Footer;