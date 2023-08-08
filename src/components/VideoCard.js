import React from 'react'

const VideoCard = ({info}) => {
    console.log(info,"I am videocardinfo");
   const{snippet, statistics} = info;
   const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className=' p-5 m-5 w-80 shadow-lg '>
        <img className='rounded-lg' alt="video"src={thumbnails.high.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
  </ul>
    </div>
  )
}

export default VideoCard;