import React, { useState } from 'react';
import EditProfile from './profile-page.jsx';
import { useNavigate } from 'react-router-dom';
import Listing from '../components/Listing.jsx';

function Search() {
  const navigate = useNavigate();

  const handleEditingProfile = (e) => {
    e.preventDefault();
    navigate('/editprofile');
  };


  const [listings, setListings] = useState([]);
  const [searched, setSearched] = useState(false);
  

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Scrape Data');
    const fetchData = async () => {
      try {
        //Body ---> job title & location
        // const response = await fetch('/search');
        // const data = await response.json();
        const data = [{jobTitle: 'Title1', priceTitle: 'Salary1', quickApplyLink: 'Link1'},
        {jobTitle: 'Title2', priceTitle: 'Salary2', quickApplyLink: 'Link2'},
        {jobTitle: 'Title3', priceTitle: 'Salary3', quickApplyLink: 'Link3'},
        {jobTitle: 'Title4', priceTitle: 'Salary4', quickApplyLink: 'Link4'}];
        console.log(data);
        const temp = [];
        data.forEach(el => {
          temp.push(<Listing title={el.jobTitle} salary={el.priceTitle} apply={el.quickApplyLink}/>)
        });
        setListings(temp);
        setSearched(true);
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
        <label className="block text-gray-700 ">Job Title</label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          placeholder="Enter your email..."
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Password:</label>
        <input
          type="text"
          name="password"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your password"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
      <div>
        { searched ?
          <div>
            {listings}
          </div> : 
        null}
      </div>
    </div>
  );
}

export default Search;
