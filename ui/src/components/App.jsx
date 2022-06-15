import{BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import PopularPost from "./PopularPost";
import PostForm  from "./PostForm";
import Register from "./Register"
import LoginForm  from "./LoginForm";
import Header from "./Header"
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import {AuthContext} from "./context/AuthContext"
import {useState,useContext} from "react"


function App() {
  const[auth,setAuth]=useState({})

    return (
      <div>
      
         <BrowserRouter>
           <AuthContext.Provider value={{auth,setAuth}}>
                  <Nav/>
    <main>
       
    <Header/>
      <div className="album py-5 bg-light">
        <div className="container">
           <div className="row">
    <Routes>
    <Route path="/blog/posts" exact element={ <PostList  action={"view"}/>}/>
    <Route path="/blog/posts/:id" element={<PostDetail  />}/>
    <Route path="/blog/posts/add" element={<PostForm  action={"add"}/>}/>
    <Route path="/blog/posts/edit/:id" element={<PostForm action={"edit"}/>}/>
    <Route path="/blog/login" element={<LoginForm />}/>
    <Route path="/blog/register" element={<Register/>}/>
    <Route path="/blog/profile" element={<Profile  />}/>
    <Route path="/blog/change_password" element={<ChangePassword/>}/>
    </Routes>
   
           <PopularPost/>
       
           </div>
       
        </div>
      </div>
  
    </main>
    < Footer/>
    </AuthContext.Provider>
    </BrowserRouter>
    
    </div>
    );
  }
  
  export default App;
  