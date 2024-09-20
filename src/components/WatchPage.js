import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, whatHasRendered } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import like from "../images/like.png"
import dislike from "../images/dislike.png"
import share from "../images/share.png"
import more from "../images/more.png"


const WatchPage = () => {
  const videoInfo=useSelector(store=>store.app.videoInfo);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  
  if(!videoInfo) return null;  

  const {channelTitle,title,thumbnails}=videoInfo.snippet;

  dispatch(whatHasRendered(false));


  return (
    <div className=" flex flex-col mt-2">

    <div className="px-5 flex">

      <div className="ml-10">
      <iframe
      className="rounded-lg"
        width="700"
        height="380"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1&mute=1&showinfo=0&rel=0"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className=""> 
        <h1 className="font-bold text-xl mt-3">{title}</h1>

        <div className="flex mt-3" >

        <img src={thumbnails.medium.url} alt="" className="rounded-full h-10 w-10" />

        <div className="flex flex-col ml-2">
        <h1 className="font-bold text-base ">{channelTitle}</h1>
        <span className="text-xs"> 1.5M subscribers</span>
        </div>

        <button className="bg-black text-white font-semibold text-base ml-5 rounded-3xl px-4 box-border ">Subscribe</button>
        
        <div className="bg-[#F0F0F0] rounded-3xl ml-32 w-36 flex items-center">
          <img src={like} alt="" className=" ml-3 h-5 w-5" />
          <span className="ml-2">160k</span>
           <span className="h-[1px] bg-gray-300 w-8  rotate-90"></span>
          <img src={dislike} alt="" className="  h-5 w-5" />
          </div>
        

        
        <div className="bg-[#F0F0F0] rounded-3xl ml-2 w-24 flex items-center">
        <img src={share} alt="" className=" ml-4 h-5 w-5" />
        <span className="font-semibold ml-2 text-sm">Share</span>
        </div>

        <div className="bg-[#F0F0F0] rounded-full ml-2 w-10 h-10 flex items-center justify-center">
          <img src={more} alt=""  className="h-8 w-8"/>
        </div>

        </div>

      </div>

      </div>

      <div className="">
        <LiveChat/>
      </div>

    </div>

    <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
