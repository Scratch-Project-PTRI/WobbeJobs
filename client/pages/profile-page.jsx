import React from "react";
import { useNavigate } from "react-router-dom";
const wobblegongImg =
  "https://t4.ftcdn.net/jpg/06/35/10/03/360_F_635100365_tnyF2t4XUmK4SPagf9tW8S3OHp6CVbyh.jpg";
  
function EditProfile() {
  const navigate = useNavigate();
  function updateProfile(event) {
    console.log("in updateProfile");
  }

  return (
    <div>
      <div>
        <img src={wobblegongImg} onClick={() => navigate("/home")} className="w-64 h-auto"/>
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
