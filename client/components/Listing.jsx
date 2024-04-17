import React from 'react';

const Listing = (props) => {

  return(
    <div className='bg-blue-100 border w-[40%] flex justify-center items-center flex-col rounded-2xl mb-5 shadow-lg'>
      <label className='font-bold text-lg pt-4'>{props.title}</label><br/>
      <label className='text-md text-gray-400'>Salary: {props.salary}</label><br/>
      <form action={props.apply} target='_blank' className='mb-4'>
        <button className='font-semibold rounded-full border bg-white p-2 hover:bg-blue-500 hover:text-white'>Apply Now</button>
      </form>
    </div>
  );
}

export default Listing;