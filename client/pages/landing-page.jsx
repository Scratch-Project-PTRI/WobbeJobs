
// landing page will have video
// getting started button routes to signup
// login in link goes to login page

import React from 'react';
import { useNavigate } from "react-router-dom";
// import video from "../assets/office_walkers.mp4";
import logo from '../assets/wobbe_mascot.png';


function LandingPage (){
    const navigate = useNavigate();
    function loginPageClick (){
        navigate('/login');
    }
  return (
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <button onClick= {loginPageClick}
             className="relative z-30 p-5 text-2xl text-white bg-blue-300 bg-opacity-70 rounded-xl">
            The job market is vast,<br></br>
            your succesful hunt starts here
        </button>
        <video
            autoPlay
            loop
            muted
            controls
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
            <source
                // src='https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4'
                // type="video/mp4"

                // src={video}
                // type="video/mp4"

                src='../assets/deep_sea.mp4' 
                type="video/mp4"
            />
    Your browser does not support the video tag.
        </video>
        <img src={logo} style={{height: '250px', width: '250px', position : 'absolute', left: '50%', top: '15%', zIndex: '10', transform: 'translateX(-50%)'   }} alt= 'tasselled wobbegong shark'/>
    </header>
)};

export default LandingPage;