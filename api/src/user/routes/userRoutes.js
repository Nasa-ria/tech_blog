// requiring exress
const express = require("express");
// requiring the appcontroller to to anble users
const controller = require("../controllers/userController")
 const authenticateToken = require ("../../middleware/function")

// creating a variable tha holds object for declaring route within our application
const router = require("express").Router();

router.post("/register", controller.register)
router.post("/signup", controller.register)
router.post("/login", controller.login)
router.post("/logout", controller.logout)
router.post("/forgot-password", controller.forgotPassword)
router.get("/profile", authenticateToken,controller.profile)
router.put("/profile",authenticateToken, controller.editProfile)
router.post("/change-password",authenticateToken, controller.changePassword)
router.get( "/",authenticateToken, controller.index)
router.put("/:id",authenticateToken, controller.editProfile)
// get a profile by admin
router.get("/:id", authenticateToken,controller.profile)

module.exports = router;