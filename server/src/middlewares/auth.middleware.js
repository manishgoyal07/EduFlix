import { User } from "../models/user.models.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, _, next) => {
   try {
      console.log(req.data);
      //get token from request
      const token =
         req.cookies?.accessToken ||
         req.header("Authorization")?.replace("Bearer ", "");
      if (!token) {
         throw new ApiErrors(401, "Un-authorized Request");
      }
      //decode the token
      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      // console.log("access token secret:", process.env.ACCESS_TOKEN_SECRET);

      //find user from db using decoded token
      const user = await User.findById(decodedToken?._id).select(
         "-refreshToken -password"
      );

      if (!user) {
         throw new ApiErrors(401, "Invalid access token");
      }

      req.user = user;
      next();

   } catch (error) {
      console.log(error);
      throw new ApiErrors(401, error?.message || "Invalid Access Token");
   }
});

//we can write the code in perticular controller, but while like, video-uploading, we need to check weather the user is verified or not
