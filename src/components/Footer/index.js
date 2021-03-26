import React from "react";
import linkedInLogo from "../../assets/LinkedInLogo.png"

function Footer(props) {

    return (
        <footer>
            <div id="footerLinkImages" >
                <a href="https://www.linkedin.com/in/vito-vittore-ms/">
                    <img src={linkedInLogo} alt="LinkedInLogo" />
                </a> 
            </div>
        </footer>
    )
}

export default Footer;