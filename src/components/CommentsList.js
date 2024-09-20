import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return comments.map((comment,index)=>(

  <div key={index}>

  <Comment  data={comment}/>

    <div className='ml-5 border border-l-black pl-5'>
    <CommentsList comments={comment.replies}/>
    </div>  
  </div>
    ))

}

export default CommentsList;