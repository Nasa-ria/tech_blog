require("../../models/mongooseConnection");
const User = require("../models/User");
require('dotenv').config();
const multer  = require('multer');
const bcrypt = require("bcrypt")
const jwt =  require("jsonwebtoken")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  uniqueSuffix)
    }
  })
  
  exports.upload = multer({ storage:storage }).single('image')

  
const makeResponse = (status = 200) => ({
	success: true,
	message: "ok",
	status: status,
	data: [],
});
/* 
1.compare password to comfirm password
2.hash intial password
3.store credential
4.catch error
*/
exports.register=async(req,res)=>{
    try{
        let response = makeResponse(201);
        //  1
        const ConfirmPassword = req.body.password === req.body.confirm_password
        if(ConfirmPassword){
            // 2
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            // 3
            const user = await new User({
                name:req.body.name,
                email:req.body.email,
                username:req.body.username,
                password:hashedPassword,
            })
           await user.save()
            response.data = user  
        // 4
         }else{
                response.status=400
                response.message="error occuried during password confirmation"
            }
            res.status(response.status).json(response)
        }
    // 4
    catch(error){
        console.log(error)
    }
 
}

/**
 * find the user using the username
 * compare the passowrd to what is in the database
 * 
 * 
 * @param {*} res 
 */
exports.login=async(req,res)=>{
     
    try{
        let response = makeResponse(201);
        const user = await User.findOne({username: req.body.username})
        if(user){
            const passwordVerify = await bcrypt.compare(req.body.password ,user.password)
           if(passwordVerify){
               const payload={
                   id:user._id,
                   name:user.name,
                   email:user.email,
                   role:user.role
               }
               const accessToken= jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:"1h"})
               
                    feedback={accessToken}
               response.data=feedback
               response.message="login successful"
             
           }else{
               response.status= 400
               response.message="error when verifying password"
           }   
        }else{
            response.status= 400
            response.message="error when logging in"
        }
        
         res.status(response.status).json(response)
    }catch(error){
        console.log(error)
    }
   
}
exports.logout=async(req,res)=>{
    let response = makeResponse(201);
    const user = await User.findOne({_id:req.user.id})
    req.logout();
    res.status(response.status).json(response)
}
exports.profile=async(req,res)=>{
    let response = makeResponse();  
            const user = await User.findOne({_id:req.user.id})
            if(user){
                response.message="profile found"
                response.data = user
            }else{
                response.status=400
                response.message="profile not found"
            }
           
        res.status(response.status).json(response)
       
}
exports.editProfile=async(req,res)=>{
    let response = makeResponse();
    const user= await User.updateOne({_id:req.user.id},req.body)
   
    res.status(response.status).json(response)
}
exports.changePassword=async(req,res)=>{
    let response = makeResponse(201);
    const user = await User.findOne({_id:req.user.id})
    if(user){
        let initialpassword = await bcrypt.compare(req.body.current_password,user.password);
        if (initialpassword) {
            if(req.body.new_password === req.body.confirm_password){
                try {
                    const newhashed = await bcrypt.hash(req.body.new_password, 10);
                    user.password = newhashed
                    await user.save() 
                    response.data= user
                } catch (error) {
                    console.error(error) 
                }
       
            }else{
                response.status=400
            }
    }else{
        response.status=400
    }
    }else{
        response.status= 400
    }

  
res.status(response.status).json(response)
}
exports.index=async(req,res)=>{
    let response = makeResponse(201);
    const user = await user.find({})
    res.status(response.status).json(response)
}
exports.editProfile=async(req,res)=>{
    let response = makeResponse(201);
    res.status(response.status).json(response)
}


exports.forgotPassword=async(req,res)=>{
    let response = makeResponse(201);
    const user = await User.findOne({name:req.body.name})
	if(user){
		const hashed = await bcrypt.hash( password, 10);
		user.password = hashed
		await user.save()
        response.data = user
        
    }else{
        response.status=400
    }
    res.status(response.status).json(response)
}