import React from 'react';

const Listing = (props) => {

  return(
    <div className='bg-blue-100 border w-1/2 h-40 flex justify-center items-center flex-col'>
      <label>{props.title}</label><br/>
      <label>Salary: {props.salary}</label><br/>
      <form action={props.apply}>
        <button className='font-semibold rounded-full border bg-white'>Apply Now</button>
      </form>
    </div>
  );
}

export default Listing;