import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import homepage from '../images/homepage.png'
import shorts from '../images/youtube_shorts_logo.png'
import subscribe from '../images/subscribe.png'
import stream from '../images/stream.png'
import music from '../images/music.png'
import console from '../images/console.png'
import trophy from '../images/trophy.png'
import video from '../images/video.png'
import trending from '../images/trending.png'
import bag from '../images/bag.png'
import podcast from '../images/podcast.png'
import makeup from '../images/makeup.png'
import learning from '../images/learning.png'
import news from '../images/newspaper.png'
import history from '../images/history.png'
import playlist from '../images/playlist.png'
import your_videos from '../images/your_videos.png'
import watch_later from '../images/clock.png'
import liked_videos from '../images/like.png'
import your_channel from '../images/account.png'

const Sidebar = () => {

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  // early return 
  if(!isMenuOpen) return null;

  return (
    <div className='p-2 shadow-lg w-56 h-[87.5vh] absolute bg-white overflow-y-scroll'>


      <ul className='mb-3 pl-10'>
      
      <div className='flex my-2 p-2'>
      <img src={homepage} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Home</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={shorts} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Shorts</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={subscribe} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Subscription</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={stream} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Live</Link></li>
      </div>

      </ul>

      <hr />

    <ul className='ml-10'>

     <h1 className='font-bold mt-5'>You</h1>

     <div className='flex my-2 p-2'>
      <img src={your_channel} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">your channel</Link></li>
      </div>


     <div className='flex my-2 p-2'>
      <img src={history} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">History</Link></li>
      </div>

     <div className='flex my-2 p-2'>
      <img src={playlist} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Playlist</Link></li>
      </div>

     <div className='flex my-2 p-2'>
      <img src={your_videos} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Your videos</Link></li>
      </div>

     <div className='flex my-2 p-2'>
      <img src={watch_later} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Watch later</Link></li>
      </div>

     <div className='flex my-2 p-2'>
      <img src={liked_videos} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Liked videos</Link></li>
      </div>

    </ul>

      <hr />

      <ul className='mb-3 mt-3 ml-10'>

      <h1 className='font-bold'>Explore</h1>

      <div className='flex my-2 p-2'>
      <img src={music} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Music</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={trophy} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Sports</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={console} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Gaming</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={video} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Movies</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={trending} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Trending</Link></li>
      </div>


      <div className='flex my-2 p-2'>
      <img src={bag} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Shopping</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={podcast} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Podcast</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={makeup} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Fashion</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={learning} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">Courses</Link></li>
      </div>

      <div className='flex my-2 p-2'>
      <img src={news} className='h-6' alt="" />
      <li className='ml-3'><Link to="/">News</Link></li>
      </div>

      </ul>
      
    </div>
  )
}

export default Sidebar