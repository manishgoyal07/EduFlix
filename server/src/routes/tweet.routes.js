import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
   createTweet,
   deleteTweet,
   getUserTweets,
   updateTweet,
} from "../controllers/tweet.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Apply verifyJWT middleware to all routes in this file
router.use(verifyJWT);

router.route("/create-tweet").post(upload.single("tweetImage"), createTweet);

router.route("/user/:userId").get(getUserTweets);

router.route("/:tweetId").patch(upload.single("newTweetImage"), updateTweet).delete(deleteTweet);

export default router;
