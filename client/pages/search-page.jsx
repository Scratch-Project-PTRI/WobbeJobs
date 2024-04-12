import React from "react";
import EditProfile from "./profile-page.jsx";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const handleEditingProfile = (e) => {
    e.preventDefault();
    navigate("/editprofile");
  };

  return (
    <div className="search-page">
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
        <button>Search</button>
      </section>
    </div>
  );
}

export default Search;
