import React from 'react';
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const navigate = useNavigate();
    function updateProfile (event) {
        console.log("in updateProfile")
    }


    return (
        <div>

        <div> 
            <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fbanner2.cleanpng.com%2F20180527%2Fgyy%2Fkisspng-tasselled-wobbegong-spotted-wobbegong-bull-shark-d-5b0a328f358497.0765976515273949592192.jpg&tbnid=Y1vaIbZCDgsAMM&vet=12ahUKEwjLz-7J0r2FAxXeBGIAHSUjDysQMygAegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.cleanpng.com%2Fpng-tasselled-wobbegong-spotted-wobbegong-bull-shark-d-2467967%2F&docid=SRhtk-GGS1SPWM&w=900&h=720&q=tasselled%20wobbegong%20cartoon&ved=2ahUKEwjLz-7J0r2FAxXeBGIAHSUjDysQMygAegQIARBP' onClick={() => navigate('/home')}/>
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