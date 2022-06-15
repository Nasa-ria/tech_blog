import { connectApi } from "../lib/functions"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import React,{useContext} from 'react'
import Reaction from "./Reaction"
import {PostContext} from "./context/PostContext"


function Post(props){
  let postInfo = useContext(PostContext)
  if(props.post){
   postInfo = props.post
  }

  const[post,setPost]=useState(postInfo)

 

  useEffect(()=>{
    setPost(postInfo)
  },[postInfo])

  const{_id="",post_title,summary,image,author,date,like_count,dislike_count,view_count}=post

 

  const handleLikePost = async() =>{
   
    // /fetch posts from back end
    const response =await connectApi(`/posts/${_id}/like`,"PUT")
    if(response.success){
    setPost(response.data);
    }else{
      console.log(response.message)
    }
  
  }
  const handleDisLikePost = async() =>{
    // /fetch posts from back end
    const response =await connectApi(`/posts/${_id}/dislike`,"PUT") 
    // set posts
    if(response.success){
    setPost(response.data);
    }else{
      console.log(response.message)
    }
  }

  

  const reaction={likes:like_count, dislikes:dislike_count,views:view_count ,onLike:handleLikePost,onDislike:handleDisLikePost }
          
    return(
        <>
        <div className="card shadow-sm mb-4">
                {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                <img src={image} alt="post image" style={{height:"26em"}}/>
                
				
					
                <div className="card-body">
                  {/* <p className="text-center">Travel</p> */}
                  <h5 className="text-center">{post_title}</h5>
                  <p className="card-text">{summary}</p>
                  {( props.view ==="view" ?(
                       <div className="text-center">
                  <button type="button" className="btn btn-outline-danger">
                  
                    <Link to={`/blog/posts/${_id}`} >Continue Reading</Link>
                    </button>
                  </div>):  <Link to={"/blog/posts/edit/"+_id}>edit post</Link>
                   )}
                  <hr/>
                           <div>
                           <small className="text-muted" style={{fontStyle:"italic"}}>By {author} on {date}</small>
                          <Reaction  reaction={reaction}/>
                     
                           </div>
                  
                       </div>
                      </div>
  
						{/* </div> */}
					{/* // </div> */}
                 
               
                
              

        </>
    )


}
export default Post