import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;  // Check if the token is present in cookies
  if (!token) {
    return next(new ErrorHandler("User Not Authorized", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id); // Set req.user
    if (!req.user) {
      return next(new ErrorHandler("User not found", 404));
    }
    next();  // Call the next middleware
  } catch (error) {
    return next(new ErrorHandler("Invalid token", 401));
  }
});


