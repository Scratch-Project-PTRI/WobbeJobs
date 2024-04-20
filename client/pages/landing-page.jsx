import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/wobbe_mascot2.png';


function LandingPage (){
    const navigate = useNavigate();
    function loginPageClick (){
        navigate('/login');
    }
  return (
   <> 
    <header className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div style={{zIndex:'30', position : 'absolute', left: '5%', top: '5%', fontFamily: 'pacifico', color: 'white', fontSize:'4.25rem' }}>
                WobbeJobs
            </div>
            <div>
                <img src={logo} style={{height: '250px', width: '250px', position : 'absolute', left: '50%', top: '15%', zIndex: '30', transform: 'translateX(-50%)'   }} alt= 'tasselled wobbegong shark'/>

            </div>
            <br/>
            <div className= 'text-4xl mt-20 text-white text-center z-30'>
                <h1 style={{fontFamily:'poppins'}}>
                    The job market is vast,<br></br>
                    your succesful hunt starts here
                </h1> 
            </div>
            <div>
            
            <button style={{fontFamily:'poppins'}} onClick= {loginPageClick}
                className="relative shadow-2xl hover:scale-125
                hover:bg-opacity-50 shadow-white z-30 p-5 text-2xl text-white bg-blue-300 bg-opacity-70 rounded-xl mt-10">
                Jump In!
            </button>

            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 min-w-screen min-h-screen"
            >
                <source

                    src='../assets/deep_sea2.mp4' 
                    type="video/mp4"
                />
        Your browser does not support the video tag.
            </video>
        </header>
    </>
)};

export default LandingPage;