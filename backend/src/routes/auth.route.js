const express = require("express")
const { registerUserController, loginUserController, logoutUserController } = require("../controllers/auth.controllers")

const router = express.Router()

/**
 * @description Register a new user
 * @route POST /api/auth/register
 * @access public
 * @returns {Object} - The registered user
 * @throws {Error} - If the user already exists or if there is an error
 */

router.post("/register", registerUserController)

/**
 * @description Login a user
 * @route POST /api/auth/login
 * @access public
 * @returns {Object} - The logged in user
 * @throws {Error} - If the user is not found or if the password is incorrect
 */

router.post("/login", loginUserController)

/**
 * @description Logout a user
 * @route POST /api/auth/logout
 * @access public
 * @returns {Object} - The logged out user
 * @throws {Error} - If the user is not found or if there is an error
 */

router.post("/logout", logoutUserController)

module.exports = router