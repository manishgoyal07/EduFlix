import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
   {
      content: {
         type: String,
         required: [true, "Content is Required"],
      },
      tweetImage: {
         type: {
            url: String,
            public_id: String,
         }
      },
      owner: {
         type: Schema.Types.ObjectId,
         ref: "User",
      },
   },
   { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
