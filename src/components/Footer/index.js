import React from "react";
import linkedInLogo from "../../assets/LinkedInLogo.png"
import gitHubLogo from "../../assets/githubLogoPortfolio.png"

function Footer(props) {

    return (
        <footer>
            <div id="footerLinkImages" >
                <a href="https://www.linkedin.com/in/vito-vittore-ms/">
                    <img src={linkedInLogo} alt="LinkedInLogo" />
                </a> 
                <a href="https://github.com/vitoman8888">
                    <img src={gitHubLogo} alt="GithubLogo" />
                </a> 
            </div>
        </footer>
    )
}

export default Footer;