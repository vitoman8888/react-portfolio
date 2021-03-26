import { React, useState } from "react";
import { validateEmail } from '../../utils/helpers';
import TabTitle from "../../assets/VitoVittorePortfolioContact.png";


function Contact(props) {
    
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage(``);
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    return (
        <section className="tabSection">
        <img className='tabImageHeader' src={TabTitle} alt="Contact" />
        <form id="contact-form">
            <div>
                <label htmlFor="name">Name:</label><br/>
                <input type="text" name="name" onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email address:</label><br/>
                <input type="email" name="email" onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label><br/>
                <textarea name="message" rows="5"  onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit" data-testid="buttonSubmitTag">Submit</button>
        </form><br/><br/>
        </section>
    )
}

export default Contact;