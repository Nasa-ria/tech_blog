// requiring express,cors,express-ejs-layouts
const express =require('express')
require('dotenv').config();
const cors = require("cors");
app = express()



//  *********middleware***
//   mounting static files note .use indicate its a middleware
app.use("/public",express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
// allows restricted acces
app.use(cors())


   // console.log(req.headers.authorization)
  


// requiring approute
const route = require("./src/routes/blogRoutes")
app.use('/api/blog/posts',route)

const Userroute = require("./src/user/routes/userRoutes")
app.use('/api/blog/users',Userroute)

// port
const PORT= process.env.PORT| 3400
app.listen(PORT ,()=>{
    console.log(`Port is listening on  port ${PORT}`)
})