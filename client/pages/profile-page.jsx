import React from 'react';
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const navigate = useNavigate();
    function updateProfile (event) {
        console.log("in updateProfile")
    }


    return (
        <div className='bg-gradient-to-br from-teal-50 via-cyan-100 to-green-200'>

        <div> 
            <img src='https://banner2.cleanpng.com/20180527/gyy/kisspng-tasselled-wobbegong-spotted-wobbegong-bull-shark-d-5b0a328f358497.0765976515273949592192.jpg' className='h-10 w-auto' onClick={() => navigate('/home')}/>
        </div>
             <span className="login-container">
                
                <label>First Name:</label>
                <input type="text" id="firstName" name="firstName" />
                <br />

                <label>Last Name:</label>
                <input type="text" id="lastName" name="lastName" />
                <br />

                <label>Username:</label>
                <input type="email" id="email" name="username" />
                <br />

                <label className="password-login">Password:</label>
                <input type="password" id="password" name="password" />
                <button onClick={updateProfile}>Update Profile</button>
            </span>

        </div>
    );
}

export default EditProfile;

// allow users to edit firstName, lastName, email, password 
    // input boxess for each populated with current values
// stretch: upload photo, upload resume
// once save button clicked, message confirming change "your [password/name/etc] has been updated"
// allow users to navigate to search page -> clocking icon on fixed nav bar header