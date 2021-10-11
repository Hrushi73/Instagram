const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/Instagramdb");
}

const postSchema = new mongoose.Schema({
  image: String,
  description: String,
  likes: {
    count: {
      type: Number,
      default: 0,
    },
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  timeStamp: Date,
  Comments: [
    {
      comment: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Post", postSchema);
