import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/wobbe_mascot2.png';


function EditProfile(props) {
  const navigate = useNavigate();

  let newEmail;
  let newPassword;

  const updateProfile = async () => {
    try {
      const response = await fetch("/editprofile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: props.currentEmail,
          newEmail,
          newPassword,
        }),
      });
      if(response.status === 200) {
        alert('Profile Updated')
        props.setCurrentEmail(newEmail);
        navigate('/home');
      } else {
        alert('Error updating profile')
      }
    } catch (error) {
      console.log("Error updating from edit profile:", error);
    }
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    newEmail = document.getElementById('email').value;
    newPassword = document.getElementById('password').value;
    console.log('current email: ', props.currentEmail);
    console.log('newEmail: ', newEmail);
    console.log('newPassword: ', newPassword);
    updateProfile();
  };


  // const updateEmail = async () => {
  //   try {
  //     const response = await fetch("/editemail", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email: props.currentEmail,
  //         newEmail,
  //       }),
  //     });
  //     if(response.status === 200) {
  //       alert('Successfully updated email')
  //       props.setCurrentEmail(newEmail);
  //       navigate('/home');
  //     } else {
  //       alert('Error updating email')
  //     }
  //   } catch (error) {
  //     console.log("Error updating from edit profile:", error);
  //   }
  // }

  // const handleUpdateEmail = (e) => {
  //   e.preventDefault();
  //   newEmail = document.getElementById('email').value;
  //   console.log('current email: ', props.currentEmail);
  //   console.log('newEmail: ', newEmail);
  //   updateEmail();
  // };
  
  // const updatePassword = async () => {
  //   try {
  //     const response = await fetch("/editpassword", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email: props.currentEmail,
  //         newPassword,
  //       }),
  //     });
  //     if(response.status === 200) {
  //       alert('Successfully updated password')
  //       navigate('/home');
  //     } else {
  //       alert('Error updating password')
  //     }
  //   } catch (error) {
  //     console.log("Error updating from edit profile:", error);
  //   }
  // }
  
    // const handleUpdatePassword = (e) => {
    //   e.preventDefault();
    //   newPassword = document.getElementById('password').value;
    //   console.log('current email: ', props.currentEmail);
    //   console.log('newPassword: ', newPassword);
    //   updatePassword();
    // };
  
  return (
    <div className="search-page min-h-screen bg-gradient-to-br from-blue-100 via-sky-200 to-blue-300">
      <div>
        <img
          src={logo}
          style={{height: '100vh', width: '100vh', position : 'fixed', left: '50%', top: '15%', zIndex: '10', transform: 'translateX(-50%)', opacity:'0.5' }} 
          alt= 'tasselled wobbegong shark'
          className="cursor-pointer pointer-events-auto ease-in-out animate-pulse"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className='flex justify-center'>
        <h1 className='text-lg font-semibold mb-4'>Hello {props.currentEmail}</h1>
      </div>
    <div style={{height: '25vh'}}>

    
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>

</div>

      <span className="profile-container">
        <label>Username:</label>
        <input type="email" id="email" name="username" placeholder="Enter new Email:" className='pl-2'/>
        {/* <button onClick={handleUpdateEmail}>Update Email</button> */}
        <br />

        <label className="password-login">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter new Password:" className='pl-2'/>
        {/* <button onClick={handleUpdatePassword}>Update Password</button> */}
      </span>
        <button onClick={handleUpdateProfile}   className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-500 w-auto h-9" >Update Profile</button>

    </div>
  );
}

export default EditProfile;

// allow users to edit firstName, lastName, email, password
// input boxess for each populated with current values
// stretch: upload photo, upload resume
// once save button clicked, message confirming change "your [password/name/etc] has been updated"
// allow users to navigate to search page -> clocking icon on fixed nav bar header
