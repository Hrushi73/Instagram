const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  const connection =
    "mongodb+srv://Hrushi-1:Hrushi-1@cluster0.r9mzj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  await mongoose
    .connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log(err));
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
