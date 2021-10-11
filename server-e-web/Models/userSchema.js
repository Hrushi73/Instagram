const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/Instagramdb");
}

const userSchema = new mongoose.Schema({
  profile: {
    type: String,
    default: "default-avatar.jpg",
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

//JWT token create
userSchema.methods.generateAuthToken = async function () {
  try {
    let newtoken = jwt.sign({ _id: this._id }, "IAMGOODBOY");
    this.tokens = this.tokens.concat({ token: newtoken });
    await this.save();
    return newtoken;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("User", userSchema);
