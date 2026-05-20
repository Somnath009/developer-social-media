const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUserController(req, res) {
    try {
        const { name, email, username, password } = req.body;

        if (!name || !email || !username || !password) {
            return res.status(400).json({
                message: "All fields are required",
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

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            name,
            email,
            username,
            password: hashPassword,
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

async function loginUserController(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({
                message: "invalid credentials",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

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
            user: user
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
};
