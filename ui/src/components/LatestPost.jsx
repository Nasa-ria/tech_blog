import  gas from "../images/gas.jpg"
function LatestPost(){
    return(
        <>
       
                     <div className="card shadow-sm" style={{width:"20em"}}>
                             <div className="container" >
                               <div className="text-center" style={{marginTop:"2em"}}><h4 >Latest Post</h4></div>
                               <div className="row" >
                            <div className="col-2">
                              <img src={gas} alt="" style={{width:"5em",marginLeft:"-1em", marginTop:"0.2em"}}/>
                              </div>
                            <div className="col-10 " >
                            <h3 className="text" style={{fontSize:"13px",marginLeft:"2.6em",width:"13em",fontStyle:"Bold"}}>A MARINE DIVE FROM SKY</h3>
                            <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted " style={{marginLeft:"4em", marginTop:"0.2em",fontStyle:"italic"}}>May 23,2012</small>
                            </div>
                            </div>
                          
                            </div>
                            <hr/>
                            <div className="row" >
                            <div className="col-2">
                              <img src={gas} alt="" style={{width:"5em",marginLeft:"-1em", marginTop:"0.2em"}}/>
                              </div>
                            <div className="col-10" >
                            <p className="text" style={{fontSize:"13px",marginLeft:"2.6em",width:"13em",fontStyle:"Bold"}}>A MARINE DIVE FROM SKY</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted " style={{marginLeft:"4em", marginTop:"-1em",fontStyle:"italic"}}>May 23,2012</small>
                            </div>
                            </div>
                            </div>
                          </div>
                        </div>
                  
           
        </>
    )
}
export default LatestPost