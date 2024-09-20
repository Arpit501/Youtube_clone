import React, { useEffect, useRef, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addVideoInfo } from '../utils/appSlice';
import Shimmer from './Shimmer';

const VideoContainer = () => {

  const dispatch=useDispatch();
  const[videos,setVideos]=useState([]);
  const[page,setPage]=useState("");
  const [loading, setLoading] = useState(false);
  const token=useRef("");
  
  useEffect(()=>{

    const timerId=setTimeout(()=>{
      
      getVideos();
      
      return ()=>{
        clearTimeout(timerId)
      }

    },300)


  },[page])


  const getVideos=async()=>{
    let data;
    if(page)
    {
      data= await fetch(YOUTUBE_VIDEOS_API+"&pageToken="+page)
    }
    else{
      
      data= await fetch(YOUTUBE_VIDEOS_API)
    }

    const json=await data.json();

    token.current=json.nextPageToken;

    setVideos([...videos,...json.items])

    setLoading(false);

  }
  

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 170 <
      window.scrollY + window.innerHeight
    ) {
          setLoading(true);
    }
  };

  useEffect(() => {
    if (loading === true) {
      setPage(token.current);
    }
  }, [loading]);


  window.addEventListener("scroll", handleScroll);

  return (
    <div className='flex flex-wrap ml-10'>
      {videos.map(video=>
      <Link key={video.id} to={"/watch?v="+video.id} onClick={()=>{
        dispatch(addVideoInfo(video));

      }}>
        <VideoCard  info={video}/>
      </Link>
      )}
      {!loading && <Shimmer/>}
    </div>
  )
}

export default VideoContainer