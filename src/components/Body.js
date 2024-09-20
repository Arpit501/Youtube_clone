import React from 'react'
import Sidebar from './Sidebar'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import homepage from '../images/homepage.png'
import shorts from '../images/youtube_shorts_logo.png'
import subscribe from '../images/subscribe.png'
import stream from '../images/stream.png'
import { ScrollRestoration } from 'react-router-dom'


const Body = () => {

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen); 
  const whichComponent=useSelector(store=>store.app.whichComponent);


  return (
    <div style={isMenuOpen?{"position": "fixed"}:{}} className='flex'> 
        <Sidebar/>


     {whichComponent?
      (<div>

        <ul className='mb-3 ml-3'>
      
        <div className=' my-8 text-xs flex flex-col items-center'>
        <img src={homepage} className='h-5' alt="" />
        <li className=''><Link to="/">Home</Link></li>
        </div>

        <div className=' my-8 text-xs flex flex-col items-center'>
        <img src={shorts} className='h-5' alt="" />
        <li className=''><Link to="/">Shorts</Link></li>
        </div>

        <div className='my-8 text-xs flex flex-col items-center'>
        <img src={subscribe} className='h-5' alt="" />
        <li className=''><Link to="/">Subscription</Link></li>
        </div>

        <div className='my-8 text-xs flex flex-col items-center'>
        <img src={stream} className='h-5' alt="" />
        <li className=''><Link to="/">Live</Link></li>
        </div>

        </ul>

      </div>):""

     }
        <Outlet/>

        <ScrollRestoration/>        

        </div>  

   
  )
}

export default Body