// requiring exress
const express = require("express");
// requiring the appcontroller to to anble users
const controller = require("../controllers/blogController")
const authenticateToken = require ("../middleware/function")

// creating a variable tha holds object for declaring route within our application
const router = require("express").Router();

router.get("/",controller.index)
router.get("/:id",controller.blogPost)
router.post("/",authenticateToken ,controller.upload,controller.add)
router.put("/:id", controller.upload,controller.edit)
router.delete("/:id",controller.delete)
router.put("/:id/like",controller.like)
router.put("/:id/dislike",controller.dislike)
router.get( "/:id/comments",controller.comments)
router.post("/:id/comments",controller.addComment)
router.put("/:id/comments/:cid",controller.editComment)
router.delete("/:id/comments/:cid",controller.deleteComment)
router.post("/:id/comments/:cid/reply",controller.replyComment)


module.exports = router;

