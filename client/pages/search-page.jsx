import React from 'react';
import EditProfile from './profile-page.jsx';
import { useNavigate } from 'react-router-dom';


function Search() {
  const navigate = useNavigate();

  const handleEditingProfile = (e) => {
    e.preventDefault();
    navigate('/editprofile');
  };

  return (
    <div className="search-page">
       <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fbanner2.cleanpng.com%2F20180527%2Fgyy%2Fkisspng-tasselled-wobbegong-spotted-wobbegong-bull-shark-d-5b0a328f358497.0765976515273949592192.jpg&tbnid=Y1vaIbZCDgsAMM&vet=12ahUKEwjLz-7J0r2FAxXeBGIAHSUjDysQMygAegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.cleanpng.com%2Fpng-tasselled-wobbegong-spotted-wobbegong-bull-shark-d-2467967%2F&docid=SRhtk-GGS1SPWM&w=900&h=720&q=tasselled%20wobbegong%20cartoon&ved=2ahUKEwjLz-7J0r2FAxXeBGIAHSUjDysQMygAegQIARBP' onClick={() => navigate('/home')}/>
      <div> 
        <button onClick={() => navigate('/editprofile')}> Go to profile page</button>
      </div>
      SEARCH / HOME PAGE
      <button onClick={handleEditingProfile}> Edit Profile</button>
      <section className="search-container">
        Keywords:
        <textarea
          name="searchContent"
          defaultValue="I'm hiring AND software engineer"
          rows={4}
          cols={40}
        />
        <label>Location:</label>
        <select name="Location">
          <option value="LA">LA</option>
          <option value="NYC">NYC</option>
          <option value="MIA">Miami</option>
          <option value="Remote">Remote</option>
        </select>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </section>
    </div>
  );
}

export default Search;
