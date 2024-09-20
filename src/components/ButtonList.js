import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const btnList=["All","Gaming","Music","Movies","Live","Songs","Cricket","Soccer","News","Cooking","Stocks"]

  return (
    <div className='flex ml-10'>

      {btnList.map(btn=><Button name={btn}/>)}
      
    </div>
  )
}

export default ButtonList