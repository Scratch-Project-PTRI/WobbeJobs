import React, { useState } from "react";
import EditProfile from "./profile-page.jsx";
import { useNavigate } from "react-router-dom";
import Listing from "../components/Listing.jsx";
const wobblegongImg =
  "https://t4.ftcdn.net/jpg/06/35/10/03/360_F_635100365_tnyF2t4XUmK4SPagf9tW8S3OHp6CVbyh.jpg";

function Search() {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setLocation] = useState("");
  const [jobRadius, setRadius] = useState("");

  const handleEditingProfile = (e) => {
    e.preventDefault();
    navigate("/editprofile");
  };

  const [listings, setListings] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Scrape Data");
    const fetchData = async () => {
      try {
        if (!jobTitle || !jobLocation) {
          console.log("Job title and Location are required");
          return;
        }

        const response = await fetch("/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jobTitle,
            jobLocation,
            jobRadius,
          }),
        });
        const data = await response.json();
        console.log("RESPONSE from Scrape ---->", data);
        // const data = [{jobTitle: 'Title1', priceTitle: 'Salary1', quickApplyLink: 'Link1'},
        // {jobTitle: 'Title2', priceTitle: 'Salary2', quickApplyLink: 'Link2'},
        // {jobTitle: 'Title3', priceTitle: 'Salary3', quickApplyLink: 'Link3'},
        // {jobTitle: 'Title4', priceTitle: 'Salary4', quickApplyLink: 'Link4'}];
        // console.log(data);
        const temp = [];
        for (let i = 0; i < data.length; i++) {
          temp.push(
            <Listing
              title={data[i].jobTitle}
              salary={data[i].priceTitle}
              apply={data[i].quickApplyLink}
              key={i}
            />
          );
        }
        setListings(temp);
        setSearched(true);
      } catch (error) {
        console.log("Error scraping from Front End Fetch:", error);
      }
    };
    fetchData();
  };

  return (
    <div className="search-page min-h-screen bg-gradient-to-br from-teal-50 via-cyan-100 to-green-200">
      <img
        src={wobblegongImg}
        className="h-10 w-auto"
        onClick={() => navigate("/home")}
      />
      <div>
        <button className="border" onClick={() => navigate("/editprofile")}>
          {" "}
          Go to profile page
        </button>
      </div>
      <h2>SEARCH / HOME PAGE</h2>
      <button className="border" onClick={handleEditingProfile}>
        {" "}
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
          className="mr-2 pl-2 w-[5%] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
        {searched ? (
          <div className="flex flex-col items-center">{listings}</div>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
