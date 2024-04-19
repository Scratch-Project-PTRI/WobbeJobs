import React from 'react';
import zipRecruiterLogo from '../assets/images/zip.png';
import indeedLogo from '../assets/images/indeed.png';

const Listing = (props) => {
  let logoImage = null;
  if(props.source === 'ZipRecruiter') {
    logoImage = zipRecruiterLogo; // Assign the imported image directly
  } else {
    logoImage = indeedLogo;
  }
  return(
    <div className='bg-blue-200 border w-[50%] flex justify-center items-center flex-col rounded-2xl mb-5 shadow-lg'>
      <label className='font-bold text-lg pt-4'>{props.title}</label><br/>
      <label className='text-md font-semibold text-white'>{props.company}</label><br/>
      <label className='text-md text-white'>Salary: {props.salary}</label><br/>

      <img className="w-auto h-8 mr-2 mb-4" src={logoImage} alt="Logo" /> {/* Render the image */}
      
      <form action={props.apply} target='_blank' className='mb-4'>
        <button className='font-semibold rounded-full border bg-white p-2 hover:bg-blue-500 hover:text-white'>Apply Now</button>
      </form>
     
    </div>
  );
}

export default Listing;
