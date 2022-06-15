import { connectApi } from "../lib/functions"
import { useEffect, useState } from "react"

function Reaction(props){
      let reaction={}
      if(props.reaction){reaction=props.reaction}
const{likes=0,dislikes=0,views=0,onLike=()=>{alert("provide a callback")},onDislike=()=>{alert("provide a callback")}}=reaction
  
    return(
        <>
       
                  <div className="btn-group ms-5" role="group" aria-label="Basic outlined example">
                  <div className='d-flex justify-content-around'> </div>
          <span className='card-text pt-2'>{likes}</span>
                            <button   className='btn btn-default' onClick={onLike}>
                            <i className="bi bi-hand-thumbs-up-fill"></i>
                            </button>
                           
                            <span className='card-text  pt-2'>{dislikes}</span>
                            <button    className='btn btn-default'onClick={onDislike}>
                            <i className="bi bi-hand-thumbs-down-fill"></i>
                            </button>
                           

                            <span className='card-text  pt-2'>  {views}</span>
                            <button   type="Submit"className='btn btn-default'>
                            <i className="bi bi-eye-fill"></i>
                       
                            </button>
                            </div>
                           
                           
        </>
    )
}
export default Reaction