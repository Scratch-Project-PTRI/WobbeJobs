import React from 'react';

function EditProfile() {
    function updateProfile (event) {
        console.log("in updateProfile")
    }


    return (
        <div>
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