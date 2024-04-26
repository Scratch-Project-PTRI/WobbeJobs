import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/wobbe_mascot2.png';
import '../styles/LandingPage.css';


function LandingPage() {
    const navigate = useNavigate();
    function loginPageClick() {
        navigate('/login');
    }

    return (
        <>
            <header id="landingPageHeader">
                <div id='titleDiv'>
                    WobbeJobs
                </div>
                <div>
                    <img id='logo' src={logo} alt='tasselled wobbegong shark' />
                </div>
                <br />
                <div id='quotesDiv'>
                    <h1>
                        The job market is vast,<br></br>
                        your succesful hunt starts here
                    </h1>
                </div>
                <div>
                    <button id='startButton' onClick={loginPageClick}>
                        Jump In!
                    </button>
                </div>
                <video autoPlay loop muted>
                    <source src='../assets/deep_sea2.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </header>
        </>
    )
};

export default LandingPage;