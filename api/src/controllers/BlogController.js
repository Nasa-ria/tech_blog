require("../models/mongooseConnection");
const Post = require("../models/Post");
const multer  = require('multer');
const { updateOne } = require("../models/Post");
// const { find } = require("../models/Post");

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


exports.index= async(req, res) => {
	let response = makeResponse();
	const posts = await Post.find({});
	response.data = posts;
	res.status(response.status).json(response);
}
exports.blogPost= async(req, res) => {
	try{
		let response = makeResponse();
		const {id}= req.params ;
		const post = await Post.findById(id);
		// if(post){
		// 	post.view_count +=1	
		
	    //  await post.save()
		//  } 
		response.data = post
		if(post){
			post.view_count +=1	
		
	     await post.save()
		 } 
		res.status(response.status).json(response);
	}
	catch(error){
        console.log(error)
	}
	
}
exports.add = async(req, res) => {
	const url = req.protocol + "://" + req.get("host");
    let imagePath = "";
    if (req.file) {
      imagePath = url + '/public/images/' + req.file.filename;
	} 
	// console.log(req.body)
	let response = makeResponse(201);
	const post = new Post(req.body);
	post.image = imagePath
	await post.save();
	response.data = post;
	res.status(response.status).json(response);
}
exports.edit= async(req, res) => {
	try{
        const url = req.protocol + "://" + req.get("host");
    let imagePath = "";
    if (req.file) {
      imagePath = url + '/public/images/' + req.file.filename;
    }
	
	let response = makeResponse();
    const updatedPost ={...req.body,image:imagePath}
	// console.log(updatedPost)
    //  if(!imagePath){
		//  delete updatedPost.image
	//  }
	const {id}= req.params ;
	const post = await Post.updateOne({_id:id},updatedPost)
	// await post.save()
	   
			//  response.data = post
			//  console.log(post)
	res.status(response.status).json(response);
	}catch(error){
    console.log(error)
	}
	
}
exports.delete= async(req, res) => {
	let response = makeResponse();
	const id= req.params.id  
    let  post =await Post.deleteOne({id:id})
     response.data= post
	res.status(response.status).json(response);
}
exports.like= async(req, res) => {
		let response = makeResponse();
		let post = await Post.findById(req.params.id);
		if(post.like_count){
			post.like_count +=1
		}else{
			post.like_count=1
		}
		await post.save()
		response.data=post
			
	return res.status(response.status).json(response);


}
exports.dislike= async(req, res) => {
	let response = makeResponse();
	let post = await Post.findById(req.params.id);
	if(post.dislike_count){
		post.dislike_count +=1
	}else{
		post.dislike_count=1
	}
	await post.save()
	response.data=post
		
	response.data=post
	res.status(response.status).json(response);
}

exports.comments= async(req, res) => {
	let response = makeResponse();
	let post = await Post.findById(req.params.id);
	response.data=post.comments
	res.status(response.status).json(response);
}
exports.addComment= async(req, res) => {
	let response = makeResponse(201);
	let post = await Post.findById(req.params.id);
           post.comments.push(req.body)
		  post.comments.comment_count +=1
		   	// post.comments.reply_count +=1
	
	await post.save()
	response.data = post
	res.status(response.status).json(response);
}
exports.editComment= async(req, res) => {
	let response = makeResponse();
	let post = await Post.findById(req.params.id);
	for(const[property,value] of Object.entries(req.body)){
		post.comments.id(req.params.cid)[property] = value
	}
	await post.save()
	response.data = post
	res.status(response.status).json(response);
}
exports.deleteComment= async(req, res) => {
	let response = makeResponse();
	let post = await Post.findById(req.params.id);
	const id= req.params.cid  
      post.comments.deleteOne({id:id})
     response.data= post
	res.status(response.status).json(response);
}
exports.replyComment= async(req, res) => {
	let response = makeResponse();
	let post = await Post.find({})
	post.comments.id(req.params.cid)?.replys.push(req.body)
	await post.save()
	response.data = post
	res.status(response.status).json(response);
}

