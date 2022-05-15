import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import React from 'react';
import logo from '../img/logo.svg';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import myImg from '../img/me.jpg';
import imgMain from '../img/new.png';
import imgOne from '../img/work-day.png';
import imgTwo from '../img/snip.png';
import imgThree from '../img/back-end-snip.png';
import imgFour from '../img/SN-API.png';
import Git from '../img/GithubIcon.png';
import LinkedIn from '../img/LI-Icon.png';

export default function PortfolioContainer() {
    return (
        <div className='App-main'>
            <header>
                <img id='left' src={logo} className="App-logo" alt="logo" />
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/work">Work</Link> </li>
                        <li> <Link to="/contact">Contact Me</Link> </li>
                    </ul>
                </nav>
                <img id='right' src={logo} className="App-logo" alt="logo" />
            </header>
            <Routes>
              <Route path="/"
                element={<Home photo={myImg} resumeLink='https://drive.google.com/file/d/12EglZpy6AvmIqKdpTQHEzFZgDDupDCj8/view?usp=sharing' />}/>
              <Route path="/work" element=
                {<Work 
                main='Travel Trustee App'
                mainImg={imgMain}
                projectMain='https://immense-ravine-97579.herokuapp.com/'
                projectMainRepo='https://github.com/ila0406/Travel-Trustees-2'
                p1='Work Day Scheduler'
                p1Img={imgOne}
                projectOne='https://dfaidley23.github.io/Work-Day-Scheduler/' 
                projectOneRepo='https://github.com/dfaidley23/Work-Day-Scheduler'
                p2='E-Commerce Back End'
                p2Img={imgThree}
                projectTwo='https://github.com/dfaidley23/E-Commerce-back-End' 
                projectTwoRepo='https://github.com/dfaidley23/E-Commerce-back-End'
                p3='Note Taker'
                p3Img={imgTwo}
                projectThree='"https://express-note-taker123.herokuapp.com/' 
                projectThreeRepo='https://github.com/dfaidley23/JS-Note-Taker'
                p4='Social Network API'
                p4Img={imgFour}
                projectFour='https://github.com/dfaidley23/Social-Network-API'
                projectFourRepo='https://github.com/dfaidley23/Social-Network-API'
                />}/>
              <Route path="/contact"
                element={<Contact github='https://github.com/dfaidley23/' linkedIn='https://www.linkedin.com/in/david-faidley-5208551a4/' gitIcon={Git} linkIcon={LinkedIn}/>}/>
            </Routes>
            <footer className="App-footer">@ 2022 David's Portfolio</footer>
        </div>
    );
};
  