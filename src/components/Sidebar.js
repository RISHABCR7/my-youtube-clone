import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if(!isMenuOpen) return null;

  return (

    <div className='p-5 shadow-lg w-48 '>

        <ul>
          
            <li className='py-1'> <Link to="/">Home</Link></li>
          
            <li className='py-1'>Shorts</li>
            <li className='py-1'>Videos</li>
            <li className='py-1'>Live</li>
        </ul>

        <h1 className='font-bold pt-5 '>Subscriptions</h1>
        <ul className=' py-1'>
            <li className='py-1'>Music</li>
            <li className='py-1'>Sports</li>
            <li className='py-1'>Gaming</li>
            <li className='py-1'>Movies</li>
        </ul>

        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul className='py-1'>
            <li className='py-1'>Music</li>
            <li className='py-1'>Sports</li>
            <li className='py-1'>Gaming</li>
            <li className='py-1'>Movies</li>
        </ul>
    </div>
  );
};

export default Sidebar;