import { useContext, useEffect, useState } from "react"
import { connectApi,abortController} from "../lib/functions"
import { AuthContext } from "./context/AuthContext"
import Post from "./Post"


function PostList(props){
  const{auth}=useContext(AuthContext)
  const[posts,setPosts]=useState([])
  useEffect(()=>{
    const getPost = async() =>{
      // /fetch posts from back end
      const response =await connectApi("/posts","GET")
      // set posts
      setPosts(response.data);
      
    }
     getPost()
     return()=>{
       if(abortController){
       abortController.abort() 
       }
     }
     },[])
     

    return(
    <>
      <div className="col-md-6 col-sm-12 col-lg-9">
        {posts.map((post)=>(
            <Post   key={post._id} post={post} view={props.action} />
          
        ))}
       
      </div>
             </>
    )
}
export default PostList