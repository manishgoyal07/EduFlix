import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
//Routes import and declaration
//any name can only be assign if export default is used
import userRoute from "./routes/user.routes.js";
import videoRoutes from "./routes/video.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import likeRoutes from "./routes/like.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import tweetRoutes from "./routes/tweet.routes.js";

const app = express();
app.use(
   cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
   })
); 
app.use(express.json({ extended: true, limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb", parameterLimit: 1000000 }));
app.use(express.static("public"));
app.use(cookieParser()); //can access the cookies in reqest and response as well
//.use because we need to call middleware in order to use controllers
app.use("/api/v1/users", userRoute);
app.use("/api/v1/videos", videoRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/comment", commentRoutes);
app.use("/api/v1/like", likeRoutes);
app.use("/api/v1/playlist", playlistRoutes);
app.use("/api/v1/tweet", tweetRoutes);
app.use("/api/v1/subscription", subscriptionRoutes);

export { app };
