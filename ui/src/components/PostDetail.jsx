import { connectApi,abortController } from "../lib/functions"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Post from "./Post"
import {PostContext} from "./context/PostContext"
import CommentList from "./CommentList"
import Reaction from "./Reaction"   
import {Link} from "react-router-dom"
import CommentForm from "./CommentForm"


function PostDetail(props){
  const[post,setPost]=useState({
    post_title:"",
    article:"",
    author:"",
    image:"",
    like_count:0,
    dislike_count:0,
    view_count:0,
    

  })
 

  const {id}=useParams()
  useEffect(()=>{
    const singlePost = async() =>{
      // /fetch posts from back end
      const response =await connectApi("/posts/" +id)       
      // set posts
      setPost(response.data);
    }
      singlePost()
        return()=>{
        if(abortController){
        abortController.abort() 
        }
      }
     },[id])
  

    return (
        <>
       <PostContext.Provider value={post}>
       <div >
       <Post post={post}/>
      
       </div>
       <CommentList post={post}/>
       <CommentForm />
      </PostContext.Provider>
        </>
    )
}
export default PostDetail