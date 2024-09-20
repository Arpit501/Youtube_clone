import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { whatHasRendered } from '../utils/appSlice'

const MainContainer = () => {

  const dispatch=useDispatch();

  dispatch(whatHasRendered(true));

  return (
    <div className=''>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer