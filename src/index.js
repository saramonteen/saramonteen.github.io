import React from 'react';
import ReactDOM from 'react-dom';
import Typing from 'react-typing-animation';
import Resume from './pdfs/sara-peek-monteen-resume.pdf';
import './stylesheet.css';

const main = (
    <div className="text">
        <div>
            <img className="header-image" src="./profile.png" alt="icon"/>
        <Typing speed={100}>
            Sara Peek Monteen
            <Typing.Delay ms={500} />
            <br/>
            <br/>
            <a className="link-text" href=" https://www.linkedin.com/in/sarapeekmonteen-6a2692125/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br/>
            <br/>
            <a className="link-text" href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </Typing>
        </div>
    </div>
);


ReactDOM.render(main, document.getElementById('root'));