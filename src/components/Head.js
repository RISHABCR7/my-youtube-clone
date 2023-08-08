import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect} from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import store from '../utils/store'
import { json } from 'react-router-dom'


const Head = () => {

  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);//empty array coz aoy suggestion api contains suggestions as array objects
  const [showSuggestions,setShowSuggestions] = useState(false);

  

  useEffect(() => 
  {
    const timer = setTimeout(() => { getSearchSuggestions(); },200);

    return () => {clearTimeout(timer); };
  
  }, [searchQuery] );

  const getSearchSuggestions = async () => {
    console.log("Api call - "  + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    

    
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className='flex col-span-1 '>
        <img 
        onClick={() => toggleMenuHandler()}
        className='h-8 cursor-pointer'
        alt="Menu" 
        src="https://media.istockphoto.com/vectors/hamburger-menu-bar-icon-flat-black-round-button-vector-illustration-vector-id1138870492?k=6&m=1138870492&s=170667a&w=0&h=PO30XUlCpuWre_mwycobTSLJIpoo5xiDuME0NjAVzjA="/>
    
        <a href='/'>
        <img 
        className="h-8 mx-2 "
        alt="Youtube logo"
        src="https://tse2.mm.bing.net/th?id=OIP.0hFcqEI4P3IGSfMe_u7F8gHaEK&pid=Api&P=0&h=180"/>
        </a>
    </div>

    <div className='col-span-10 px-10'>
      <div>
        <input 
         className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' 
         type="text"
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         onFocus={() => setShowSuggestions(true)}
         onBlur={() => setShowSuggestions(false)}

        />
         <button 
          className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 absolute' 
          >
            🔍
         </button>
        </div>
        {showSuggestions && (
        <div className=" bg-white py-2 px-5 w-[27.2rem] shadow-lg rounded-lg border-gray-100 absolute ">
           <ul>
            {suggestions.map((s) => (
               <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100" >🔍 {s}</li>
            ))}
            
           
           </ul>
        </div>
        )}
    </div>
    <div className='col-span-1'>
        <img 
        className='h-8'
        alt="user"
        src="https://tse4.mm.bing.net/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&pid=Api&P=0&h=180"/>
    </div>
    </div>
  )
}

export default Head