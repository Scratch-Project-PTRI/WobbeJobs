import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/wobbe_mascot2.png';
import profilePic from '../assets/wobbe_mascot_profile.png';


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
        if(newEmail !== '') {
         props.setCurrentEmail(newEmail);
        }
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

  function handlePasswordVisibility() {
    if(document.getElementById('password').getAttribute('type') === 'password') {
      document.getElementById('password').setAttribute('type', 'text');
      document.getElementById('passwordImage').setAttribute('src', 'https://media.geeksforgeeks.org/wp-content/uploads/20210917150049/eyeslash.png')
    } else {
      document.getElementById('password').setAttribute('type', 'password');
      document.getElementById('passwordImage').setAttribute('src', 'https://media.geeksforgeeks.org/wp-content/uploads/20210917145551/eye.png')
    }
  }

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
    <div className="search-page min-h-screen" style={{ backgroundImage: `url('../assets/AdobeStock_689555388_deepsea.jpeg')`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' ,height: '100vh'}}>
      <div className='pl-[5%] pt-[5%]' style={{ zIndex: 30, fontFamily: 'pacifico', color: 'white', fontSize: '4rem' }}>
        WobbeJobs
      </div>  
      <div className='flex justify-center ml-[-420px] mt-[-110px]'>
        <img
          src={logo}
          alt= 'tasselled wobbegong shark'
          className='h-[125px] w-[125px]'
        />
      </div>   
        <div className='flex justify-center mb-2'>
          {/* <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div> */}
          <img className='h-[80px] ml-[-37.5px]' src={profilePic}></img>
        </div>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-semibold mb-4 text-white text-center'>Hello, <br/> {props.currentEmail}</h1>
      </div>

      <div className='flex justify-center'>
        <div className='max-w-md w-full z-10 bg-white rounded-xl shadow-2xl p-6 bg-blue-200'>
          <div className="flex justify-center mb-4">
            <label className="font-bold text-lg">Enter your new profile information</label>
          </div>
          <label>Email </label>
          <label className="text-gray-500 italic">(optional)</label>
          <label>:</label>
          <input type="email" id="email" name="username" placeholder="Enter new Email:" className='pl-2 mt-1 block w-full rounded-md shadow-sm'/>
          {/* <button onClick={handleUpdateEmail}>Update Email</button> */}
          <br />
          <label className="password-login">Password </label>
          <label className="text-gray-500 italic">(optional)</label>
          <label>:</label>
          <input type="password" id="password" name="password" placeholder="Enter new Password:" className='pl-2 mt-1 block w-full rounded-md shadow-sm'/>
          <img id='passwordImage' src='https://media.geeksforgeeks.org/wp-content/uploads/20210917145551/eye.png' className='h-5 w-5 inline-block ml-[93%] mt-[-13%]' onClick={handlePasswordVisibility}></img>
          {/* <button onClick={handleUpdatePassword}>Update Password</button> */}
          <div className='flex justify-center mt-4'>
            <button onClick={handleUpdateProfile} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-500 w-auto h-9" >Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

// allow users to edit firstName, lastName, email, password
// input boxess for each populated with current values
// stretch: upload photo, upload resume
// once save button clicked, message confirming change "your [password/name/etc] has been updated"
// allow users to navigate to search page -> clocking icon on fixed nav bar header
