import {Link} from 'react-router-dom'
import React from 'react'
function Nav(){
    return(
        <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light rounded" aria-label="Tenth navbar example">
    <div className="container-fluid">
    

      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item">
         <Link to={"/blog/posts"}>Home</Link>
          </li>
          
          <li className="nav-item">
           <Link to={"/blog/posts/add"}>Add post</Link>
            </li>
            <li className="nav-item">
           <Link to={"/blog/login"}>SignIn</Link>
           </li>
           <li className="nav-item">
             <Link to={"/blog/register"}>SignUp</Link>
             </li>
             <li className="nav-item">
             <Link to={"/blog/profile"}>Profile</Link>
             </li>
        
        </ul>
      </div>
    </div>
  </nav>
  
        </>
    )
}
export default Nav;
  