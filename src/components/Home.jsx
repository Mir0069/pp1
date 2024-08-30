import React from 'react'
import Working from './images/working.svg';

const Home = () => {
  return (
    <div className='top-20 relative block pb-20 justify-around h-[80vh]'>
      <div className='flex'>
        <div className='w-1/2  mt-32 ml-44 font-extrabold text-5xl'> 
        Are you looking for Freelancers?
        <p className='text-xl font-light pt-6'>Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice</p>
        </div>
        
        <div className=' mt-12 w-1/2 '><img src={Working} className=' ml-32 w-1/2' /></div>
      </div>



    </div>

  )
};

export default Home;
