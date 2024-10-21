import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { sendToken } from "../utils/jwtToken.js";

// Register User
export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, password, role } = req.body;
  
  // Check for missing fields
  if (!name || !email || !phone || !password || !role) {
    return next(new ErrorHandler("Please fill out the complete form!", 400));
  }

  // Check if email is already registered
  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email already registered!", 400));
  }

  // Create new user
  const user = await User.create({
    name,
    email,
    phone,
    password,
    role,
  });

  // Send token
  sendToken(user, 201, res, "User Registered!");
});

// User Login
export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, role } = req.body;

  // Validate inputs
  if (!email || !password || !role) {
    return next(new ErrorHandler("Please provide email, password, and role.", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password.", 401));
  }

  // Check password
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password.", 401));
  }

  // Verify user role
  if (user.role !== role) {
    return next(
      new ErrorHandler(`User with the provided email and role not found!`, 404)
    );
  }

  // Send token
  sendToken(user, 200, res, "User Logged In!");
});

// Logout User
export const logout = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200) // Use 200 for successful logout
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()), // Expiry should clear the cookie
    })
    .json({
      success: true,
      message: "Logged Out Successfully.",
    });
});

// Get User Information
export const getUser = catchAsyncErrors((req, res, next) => {
  const user = req.user; // req.user should be set by middleware after verifying token

  res.status(200).json({
    success: true,
    user,
  });
});