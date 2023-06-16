import asyncHandler from "express-async-handler";
import User, {
  validateUserAuth,
  validateUserRegister,
} from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

/**************************************
@desc Auth user/set token
@route POST /api/user/auth
@access Public
 **************************************/
const authUser = asyncHandler(async (req, res) => {
  const { error } = validateUserAuth(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id, user.role);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

/**************************************
@desc Register a new user
@route POST /api/users/
@access Public
 **************************************/
const registerUser = asyncHandler(async (req, res) => {
  const { error } = validateUserRegister(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id, user.role);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/**************************************
@desc Logout user
@route POST /api/user/logout
@access Public
 **************************************/
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "user logged out" });
});

/**************************************
@desc Get user user Profile
@route GET /api/user/profile
@access Private
 **************************************/
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
});

/**************************************
@desc Get all users user
@route GET /api/user/all-users
@access Private (only Admin)
 **************************************/
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404);
    throw new Error("No users");
  }
});

/**************************************
@desc Update user Profile
@route PUT /api/user/profile
@access Private
 **************************************/
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }

  res.status(200).json({ message: "update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
};
