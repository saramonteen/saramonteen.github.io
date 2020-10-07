import React from 'react';
import Typing from 'react-typing-animation';
import Resume from './pdfs/sara-peek-monteen-resume.pdf';
import WeatherHeader from './WeatherHeader.jsx';
import './stylesheet.css';

const main = (
    <div>
        <div><WeatherHeader/></div>
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
                <br/>
                <br/>
                <a className="link-text" href=" https://github.com/saramonteen" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Typing>
            </div>
        </div>
    </div>
);

export default main;