import LatestPost from "./LatestPost"
import  gas from "../images/gas.jpg"

function PopularPost(){
    return(
      
         <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card-body">
                <div className="card shadow-sm" style={{width:"20em"}}>
                   <div className="container">
                   <div className="text-center" style={{marginTop:"2em"}}><h4 >Populer Post</h4></div>
                     <div className="row">
                       <div className="col">
                         <img  src={gas} alt="#" style={{width:"15em",marginLeft:"1em",marginBottom:"1em"}}/> 
                       </div>
                       <div className="col" style={{marginLeft:"1em"}}>
                       <h6>sdn ssyahjfkn dusik</h6>
                       </div>
                     </div>
                    
                     <small className="text-muted "  style={{marginLeft:"1em"}} >May 23,2012</small>
                   
                     <hr/>
                       
                     </div>
                </div>
            </div>
              <div style={{marginTop:"2em",marginLeft:"1em"}}>
              <LatestPost/>
              </div>
              </div>
             
            
             
      
    )
}
export default PopularPost