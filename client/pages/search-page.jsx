import React, { useState } from 'react';
import EditProfile from './profile-page.jsx';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [jobLocation, setLocation] = useState('');
  const [jobRadius, setRadius] = useState('');

  const handleEditingProfile = (e) => {
    e.preventDefault();
    navigate('/editprofile');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Scrape Data');
    const fetchData = async () => {
      try {
        if (!jobTitle || !jobLocation) {
          console.log('Job title and Location are required');
          return;
        }

        const response = await fetch('/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jobTitle,
            jobLocation,
            jobRadius,
          }),
        });
        const data = await response.json();
        console.log('RESPONSE from Scrape ---->', data);
      } catch (error) {
        console.log('Error scraping from Front End Fetch:', error);
      }
    };
    fetchData();
  };

  return (
    <div className="search-page">
      <img
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fbanner2.cleanpng.com%2F20180527%2Fgyy%2Fkisspng-tasselled-wobbegong-spotted-wobbegong-bull-shark-d-5b0a328f358497.0765976515273949592192.jpg&tbnid=Y1vaIbZCDgsAMM&vet=12ahUKEwjLz-7J0r2FAxXeBGIAHSUjDysQMygAegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.cleanpng.com%2Fpng-tasselled-wobbegong-spotted-wobbegong-bull-shark-d-2467967%2F&docid=SRhtk-GGS1SPWM&w=900&h=720&q=tasselled%20wobbegong%20cartoon&ved=2ahUKEwjLz-7J0r2FAxXeBGIAHSUjDysQMygAegQIARBP"
        onClick={() => navigate('/home')}
      />
      <div>
        <button onClick={() => navigate('/editprofile')}>
          {' '}
          Go to profile page
        </button>
      </div>
      SEARCH / HOME PAGE
      <button onClick={handleEditingProfile}> Edit Profile</button>
      <div className="mb-4">
        <label className="block text-gray-700 ">Job Title:</label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          placeholder="Enter your desired Job Title..."
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Location:</label>
        <input
          type="text"
          name="location"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your desired Location..."
          value={jobLocation}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Radius:</label>
        <input
          type="text"
          name="radius"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your desired Radius..."
          value={jobRadius}
          onChange={(e) => setRadius(e.target.value)}
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
