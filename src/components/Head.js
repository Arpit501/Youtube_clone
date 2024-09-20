import React, { useEffect, useState } from 'react'
import hamburger_menu from '../images/hamburger_menu.png'
import youtube_logo from '../images/youtube_logo.png'
import usericon from '../images/usericon.png'
import search_icon from '../images/search_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'
import { Link } from 'react-router-dom'


const Head = () => {
    
    const [showSuggestions,setShowSuggestions]=useState(false);
    const [searchQuery,setSearchQuery]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const dispatch=useDispatch();
    const searchCache=useSelector(store=>store.search)

    
    useEffect(()=>{

      const timer=  setTimeout(()=>{
        
        if(searchCache[searchQuery])
        {
            setSuggestions(searchCache[searchQuery]);
        }
        else{
            getSearchSuggestions()
        }

    },200)

      return ()=>{
        clearTimeout(timer);
      } 

    },[searchQuery])


    const getSearchSuggestions=async()=>{

        
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);

        const str=await data.text();

        const arr = JSON.parse(str.substring(str.indexOf("["), str.indexOf("])") + 1));

        let suggestionsTuple;

        if (Array.isArray(arr) && Array.isArray(arr.at(1))) {
            suggestionsTuple = arr.at(1);
        }
        
        const suggestion = suggestionsTuple.flatMap((suggestion) => suggestion).filter((suggestion) => typeof suggestion === "string");

        setSuggestions(suggestion);

        dispatch(cacheResults({

            [searchQuery]:suggestion,
        }))
    }

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }

  return (
    <div className='grid grid-flow-col px-4 py-2 m-2'>
        <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        className='h-5 cursor-pointer' 
        src={hamburger_menu} 
        alt="menu"
        />
        <a href="/">
        <img 
        className='h-5 ml-8'
        src={youtube_logo} 
        alt="youtube logo" 
        />
        </a>
        </div>

        <div className='col-span-10 pl-32 -mt-1'>
            <div className='flex'>
            <input 
            className='w-3/5 border border-gray-500 p-2 rounded-l-full px-5'
            type="text"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            
             />
             
            <button className='border border-gray-500 px-5 py-2 rounded-r-full bg-gray-100'>
                <img 
                className='h-4 w-4'
                src={search_icon} 
                alt="search-icon"
                 />
            </button>
            </div>
            {showSuggestions && (<div className='fixed bg-white mt-1 py-2 px-5 ml-1 w-[38%] shadow-lg rounded-lg border border-gray-100'>
                <ul className=''>
               {suggestions.map(s=><li key={s} className='flex items-center py-1 hover:bg-gray-50 rounded-sm'> <img src={search_icon} alt="" className='h-3 w-3 mr-3' />{s}</li>)}
    
                </ul>
            </div>)}
        </div>


        <div className='col-span-1'>
            <img 
            className='h-8'
            src={usericon} 
            alt="user" 
            />
        </div>

    </div>
  )
}

export default Head