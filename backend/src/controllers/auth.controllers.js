const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

/**
 * @description Register a new user
 * @route POST /api/auth/register
 * @access public
 * @returns {Object} - The registered user
 * @throws {Error} - If the user already exists or if there is an error
 */
async function registerUserController(req, res) {
    try {
        const { name, email, username, password } = req.body;

        if (!name || !email || !username || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email",
            });
        }

        const isExist = await userModel.findOne({
            $or: [{ email }, { username }],
        });

        if (isExist) {
            return res.status(409).json({
                message: "user already exists",
            });
        }

        const newUser = await userModel.create({
            name,
            email,
            username,
            password,
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("token", token);

        return res.status(201).json({
            message: "User registered successfully",
            user: newUser,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

/**
 * @description Login a user
 * @route POST /api/auth/login
 * @access public
 * @returns {Object} - The logged in user
 * @throws {Error} - If the user is not found or if the password is incorrect
 */

async function loginUserController(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({
                message: "invalid credentials",
            });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({
                message: "invalid credentials",
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("token", token);

        return res.status(201).json({
            message: "User loggedin successfully",
            user: user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

/**
 * @description Logout a user
 * @route POST /api/auth/logout
 * @access public
 * @returns {Object} - The logged out user
 * @throws {Error} - If the user is not found or if there is an error
 */

async function logoutUserController(req, res) {
    try {
        res.clearCookie("token");
        return res.status(200).json({
            message: "User logged out successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

module.exports = {
    registerUserController,
    loginUserController,
    logoutUserController,
};
