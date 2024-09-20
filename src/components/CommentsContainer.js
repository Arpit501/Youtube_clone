import React from 'react'
import CommentsList from './CommentsList'

const commentsData=[
    {
        name:"Arpit singhal",
        text:"nice video sir keep making amazing content",
        replies:[
            {
            name:"Shefali singhal",
            text:"nice video sir keep making amazing content",
            replies:[

            {
                name:"Pravesh",
                text:"nice video sir keep making amazing content",
                replies:[
                    {
                        name:"Nilesh",
                        text:"nice video sir keep making amazing content",
                        replies:[],
                    },
                    {
                        name:"Tushar",
                        text:"nice video sir keep making amazing content",
                        replies:[],
                    },
                ],
            },
            {
                name:"Lakshay",
                text:"nice video sir keep making amazing content",
                replies:[],
            },
            ],
            },
            {
                name:"Prakash",
                text:"nice video sir keep making amazing content",
                replies:[],
            },
            {
                name:"Hardik",
                text:"nice video sir keep making amazing content",
                replies:[],
            },
        ],
    },
    {
        name:"Aryan",
        text:"nice video sir keep making amazing content",
        replies:[],
    },
    {
        name:"Vishal",
        text:"nice video sir keep making amazing content",
        replies:[],
    },
    {
        name:"Vinay",
        text:"nice video sir keep making amazing content",
        replies:[],
    },
    {
        name:"Prateek",
        text:"nice video sir keep making amazing content",
        replies:[],
    },
    {
        name:"Mohit",
        text:"nice video sir keep making amazing content",
        replies:[],
    },
   
]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 w-3/5'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer