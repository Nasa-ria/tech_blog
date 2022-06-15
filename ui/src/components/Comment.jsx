function Comment(props){
    return(
        <>
        <div className="card" style={{margin: "2rem"}}>
         <div className="card-body ms-5" style={{fontStyle:"italic"}}>
         <button type="button" class="btn btn-secondary" style={{marginLeft:"37em"}} >reply</button>
              <p className="mt-1">comment by {props.comment.author} 
             <br/>
             <span className="ms-3">on:{props.comment.date}</span></p>
          
             <p>comment:{props.comment.text}</p>
             </div>
           
         </div>
       
        </>
    )
}
export default Comment