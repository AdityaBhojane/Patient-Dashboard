import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";


export const userValidation = async(req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        message: "no token provided",
      });
    }
    const response =  jwt.verify(token, JWT_SECRET);
    req.user = response;
    next()
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized: Invalid token" });  
  }
};
