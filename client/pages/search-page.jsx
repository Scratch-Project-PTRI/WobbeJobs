import React, { useState } from 'react';
import EditProfile from './profile-page.jsx';
import { useNavigate } from 'react-router-dom';
import Listing from '../components/Listing.jsx';
import { Watch } from 'react-loader-spinner';
const wobblegongImg = '../assets/wobbe_mascot2.png';
const ocean = '../assets/AdobeStock_689555388_deepsea.jpeg';

function Search(props) {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [jobLocation, setLocation] = useState('');
  const [jobRadius, setRadius] = useState('');
  // const [savedSearch, setSavedSearch] = useState("");

  const handleEditingProfile = (e) => {
    e.preventDefault();
    navigate('/editprofile');
  };

  const [listings, setListings] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(false);
    setLoading(true);
    console.log('Scrape Data');
    const fetchData = async () => {
      try {
        if (!jobTitle || !jobLocation) {
          alert('Job title and Location are required');
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

        const temp = [];
        for (let i = 0; i < data.length; i++) {
          temp.push(
            <Listing
              title={data[i].jobTitle}
              company={data[i].companyName}
              salary={data[i].priceTitle}
              apply={data[i].quickApplyLink}
              source={data[i].src}
              key={i}
            />
          );
        }
        setListings(temp);
        setLoading(false);
        setSearched(true);
      } catch (error) {
        console.log('Error scraping from Front End Fetch:', error);
      }
    };
    fetchData();
  };

  return (
    <div className="search-page min-h-screen bg-[url('/Users/jewelclarke/Desktop/PTRI Cohort 14/scratch-project/client/assets/AdobeStock_689555388_deepsea.jpeg')]">
         <div style={{zIndex:'30', position : 'absolute', left: '2%', top: '4%', fontFamily:'pacifico', color: 'black', fontSize:'4rem' }}>
        WobbeJobs
      </div>

      <img
        src={wobblegongImg}
        style={{height: '175px', width: '175px', position : 'absolute', left: '32%', top: '-2%', zIndex: '30', transform: 'translateX(-50%)'}} 
        alt= 'tasselled wobbegong shark'
        onClick={() => navigate('/home')}
      />
      <button
        className="bg-blue-500 absolute top-10 right-10 text-white font-bold py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-500"
        onClick={handleEditingProfile}
      >
        Edit Profile
      </button>

      {/* 
        src={wobblegongImg}
        onClick={() => navigate('/home')}
        className="w-64 h-auto"
      />
      <button onClick={handleEditingProfile}> Edit Profile</button>
      <div className="mb-4">
      <label className="block text-gray-700 ">Job Title:</label>
      <input
      type="text"
      className="mt-1 block w-[25%] border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
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
          className="mt-1 block w-[25%] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
          className="mt-1 block w-[25%] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
        </button> */}
          <div className="flex justify-center relative">
            <h1 className="text-lg font-semibold mb-4">
              Happy Hunting, <br/> {props.currentEmail}
            </h1>
          </div>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          className="mr-2 pl-2 w-[15%] border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          placeholder="Job Title..."
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <input
          type="text"
          name="location"
          className="mr-2 pl-2 w-[10%] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Location..."
          value={jobLocation}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          name="radius"
          className="mr-2 pl-2 w-[6%] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Radius..."
          value={jobRadius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-500"
        >
          Search
        </button>
      </div>      


      <div>
        {loading ? (
          <div className="mt-40 flex justify-center">
            <Watch
              visible={true}
              height="80"
              width="80"
              radius="48"
              color="#4fa94d"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : null}
        {searched ? (
          <div className="flex justify-center w-[50%]">
            <div
              className="flex justify- ceneter flex-col items-center"
              style={{ maxHeight: '900px', overflowY: 'scroll' }}
            >
              {listings}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
