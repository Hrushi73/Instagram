const jwt = require("jsonwebtoken");
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
