import React from 'react'

const VideoCard = ({info}) => {

    if(!info) return;

    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;

  return (
    <div className='p-1 m-3 w-64 h-72'>
        <img 
        className='rounded-lg'
        src={thumbnails.medium.url} 
        alt="thumbnail"
         />
        <ul>
            <li className='font-bold py-1'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard