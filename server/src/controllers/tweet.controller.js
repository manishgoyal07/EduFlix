import mongoose, { isValidObjectId } from "mongoose";
import { Tweet } from "../models/tweets.models.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { deleteFromCloudinary, uploadToCloudinary } from "../utils/cloudinary.js";

const createTweet = asyncHandler(async (req, res) => {
   const { content } = req.body;
   const tweetImage = await req.file?.path
   console.log(req.body);
   console.log(req.file);
   if (!content) {
      throw new ApiErrors(400, "Content is Required");
   }

   const twtImage = await uploadToCloudinary(tweetImage)
   //    console.log(twtImage);

   //    const printAddress = async () => {
   //       const a = await twtImage;
   //       console.log(a);
   //     };
   // printAddress()
   if (tweetImage && !twtImage) {
      throw new ApiErrors(400, "Error in Uploading Image on Cloudinary")
   }
   const tweet = await Tweet.create({
      content,
      tweetImage: {
         url: twtImage.url,
         public_id: twtImage.public_id
      },
      owner: req?.user?._id,
   });

   if (!tweet) {
      throw new ApiErrors(500, "Error in creating tweet");
   }

   return res
      .status(200)
      .json(new ApiResponse(201, tweet, "Tweet created Successfully"));
});

const getUserTweets = asyncHandler(async (req, res) => {
   const { userId } = req.params;

   if (!isValidObjectId(userId)) {
      throw new ApiErrors(400, "Invalid User Id");
   }

   const tweets = await Tweet.aggregate([
      {
         $match: {
            owner: new mongoose.Types.ObjectId(userId),
         },
      },
      {
         $lookup: {
            from: "users",
            foreignField: "owner",
            localField: "_id",
            as: "Owner",

            pipeline: [
               {
                  $project: {
                     username: 1,
                     "avatar.url": 1,
                  },
               },
            ],
         },
      },
      {
         $lookup: {
            from: "likes",
            foreignField: "tweet",
            localField: "_id",
            as: "likedetails",

            pipeline: [
               {
                  $project: {
                     likeBy: 1,
                  },
               },
            ],
         },
      },
      {
         $addFields: {
            likesCount: {
               $size: "$likedetails",
            },
            ownerDetails: {
               $first: "$Owner",
            },
         },
      },
      {
         $project: {
            content: 1,
            tweetImage: 1,
            ownerDetails: 1,
            likesCount: 1,
            createdAt: 1,
         },
      },
   ]);

   if (!tweets) {
      throw new ApiErrors(500, "Error in fetching tweets");
   }

   return res
      .status(200)
      .json(new ApiResponse(201, tweets, "All Tweets fetched Successfully"));
});

const updateTweet = asyncHandler(async (req, res) => {
   const { content } = req.body;
   const newTweetImage = req.file?.path
   const { tweetId } = req.params;

   if (!content) {
      throw new ApiErrors(400, "Content is Required");
   }

   if (!isValidObjectId(tweetId)) {
      throw new ApiErrors(400, "Invalid Tweet Id");
   }

   const tweet = await Tweet.findById(tweetId);

   if (!tweet) {
      throw new ApiErrors(400, "Tweet not found");
   }

   if (tweet?.owner.toString() !== req.user?._id.toString()) {
      throw new ApiErrors(
         400,
         "You can not update the tweet as you are not the owner"
      );
   }
   const tweetImageToDelete = tweet.tweetImage?.public_id;
   const newImageOnTweet = await uploadToCloudinary(newTweetImage)
   if (!newImageOnTweet) {
      throw new ApiErrors(400, "Error Uploading New Tweet Image on cloudinary")
   }
   const updatedTweet = await Tweet.findByIdAndUpdate(
      tweetId,
      {
         $set: {
            content,
            tweetImage: {
               url: newImageOnTweet.url,
               public_id: newImageOnTweet.path
            }
         },
      },
      { new: true }
   );

   if (!updatedTweet) {
      throw new ApiErrors(500, "Failed to Update Tweet. Please Try again");
   }
   if (tweetImageToDelete) {
      await deleteFromCloudinary(tweetImageToDelete)
   } 
   return res
      .status(200)
      .json(new ApiResponse(201, updatedTweet, "Tweet updated Successfully"));
});

const deleteTweet = asyncHandler(async (req, res) => {
   const { tweetId } = req.params;

   if (!isValidObjectId(tweetId)) {
      throw new ApiErrors(400, "Invalid Tweet Id");
   }

   const tweet = await Tweet.findById(tweetId);

   if (!tweet) {
      throw new ApiErrors(400, "Tweet not found");
   }

   if (tweet?.owner.toString() !== req.user?._id.toString()) {
      throw new ApiErrors(
         400,
         "You can not delete the tweet as you are not the owner"
      );
   }

   await Tweet.findByIdAndDelete(tweetId);

   return res.status(
      200,
      new ApiResponse(201, {}, "Tweet Deleted Successfully")
   );
});

export { createTweet, getUserTweets, updateTweet, deleteTweet };
