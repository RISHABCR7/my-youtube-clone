import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
import VideoDescription from './VideoDescription'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import { Link } from 'react-router-dom'
import VideoCard from './VideoCard'



const WatchPage = () => {

  const[video,setVideo] = useState([]);
  const [searchParams] = useSearchParams();
  

  

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    //console.log(json.items);
    setVideo(json.items);
    
  }

  

  
  

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    },[])

    //console.log(video.indexOf(searchParams.get("v")));
    //console.log(video.map(e => e.hello).indexOf(searchParams.get("v")))

    const index = video.findIndex(x => x.id === searchParams.get("v"));

   // console.log(index);

    //const array = video.map(obj => Object.values(obj));

    console.log(video[index],"i am");

    console.log(video[index]?.snippet,"i am snippet");

   // const newArray = Array.of(array[index]);

    //console.log(newArray,"new array i am")
    //console.log(array[index].length,"length")

    //console.log(video[index],"is current");

  return (
    <div className='flex flex-col w-full'>
    <div className='display flex w-full'>
      <div>
      <iframe 
       width="1000" 
       height="600" 
       src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
      
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen></iframe>
       
       </div>

       <div className='w-full'>
        <LiveChat/>
       </div>
    </div>

   



<div className='flex'>
      <div>
       
       
       <VideoDescription info={video[index]}/> 
       
        

  
        
       
        {<CommentsContainer/>}
      </div>

      <div>
      {video.map((video) =>(
       
       <Link key={video.id} to={"/watch?v="+video.id}>
       <VideoCard  info={video} 
       /> 
       

       </Link> 
       
       ))}
      </div>

    </div>
    </div>
    
  )
}

export default WatchPage