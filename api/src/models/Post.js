
require("../models/mongooseConnection");
const mongoose = require("mongoose");

const RepliesSchema = new mongoose.Schema({
	author:{type:String},
	date:{type:Date,default:Date.now()},
	text:{type:String}
})


const CommentsSchema = new mongoose.Schema({
	author: { type: String },
	date: { type: Date,default:Date.now() },
	text: { type: String },
	like_count: { type: Number ,default:0},
	dislike_count: { type: Number ,default:0},
	reply_count:{ type: Number ,default:0},
	replies:[RepliesSchema],
});

const PostsSchema = new mongoose.Schema({
	author: { type: String },
	date: { type: Date,default:Date.now()},
	post_title: { type: String },
	article: { type: String },
	summary: { type: String },
	image: { type: String },
	like_count: { type: Number,default:0 },
	dislike_count: { type: Number ,default:0},	
	view_count: { type: Number,default:0},
	comment_count: { type: Number ,default:0},
	comments: [CommentsSchema],
});

module.exports = mongoose.model('Post',PostsSchema);
