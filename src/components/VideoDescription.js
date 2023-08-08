import React from 'react'
import Button from './Button';


export const VideoDescription = ({ info }) => {
 // console.log(info , "i am info");
  //console.log(info?.snippet,"2nd snipper")
  //console.log(info?.snippet?.title,"title")

  //console.log(info.toString(),"method tostring");

 // console.log(info[0],"i am zero")

 // console.log(info.kind,"I am kind");
  //console.log(info.slice(4,6),"Hi spliced");

  //console.log(info.snippet.channedlId,"Did i do")

  //console.log(info[0],"info");

  //console.log(info[0],"object");

  //console.log(info[0].slice(3,6),"i am sliced info");

  
  //console.log(c,"array of method")
  //console.log(c[0][3].channelTitle,"I am c")

 // console.log(c[3].channelTitle,"titlr of channel");

 
  

 //console.log(info.channelTitle);

  //const { snippet, statistics} = info;

  //const {channelTitle, description, title, publishedAt} = snippet;

  
 return (
    <div className=''>

      <div className='p-2 m-2 font-bold'>{info?.snippet?.title}</div>
     
      <div className='p-2 m-2 font-bold '> {info?.snippet?.channelTitle} </div>

      <div className='flex '> 
      <div className='px-2 '><Button  name="👍 Like 👎 "/></div>
     
      <div className='px-2 '><Button name="↗️ Share"/></div>
      <div className='px-2 '><Button name="⬇Download"/></div>
      <div className='px-2 '><Button name="🏳️ Report"/></div>
      </div>

      <div className='p-2 m-2 bg-gray-200 w-8/12'>

           <div className='py-2'>{info?.statistics?.viewCount}</div>
           <div className='py-2' >{info?.publishedAt}</div>
           <div className='py-2 text-black-100 '>{info?.snippet?.description}</div>
      </div>

        
    </div>
  )
}

export default VideoDescription;
