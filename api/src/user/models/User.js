
require("../../models/mongooseConnection");
const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
	name:{type:String},

    username:{type:String},

    password:{type:String},

    email:{type:String},

	reg_date:{type:Date,default:Date.now()},

    image:{type:String,default:""},

	role:{type:String,default:"user"},

    token:{type:String,default:""}
})
module.exports = mongoose.model('User',Schema);