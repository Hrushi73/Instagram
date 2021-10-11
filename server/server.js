//Express
const express = require("express");
const app = express();
const path = require("path");
//Database
const mongoose = require("mongoose");
const User = require("./Models/userSchema");
const Post = require("./Models/postSchema");
//bodyParser
var bodyParser = require("body-parser");
//port
const PORT = process.env.PORT || 3001;
//CookieParser
var cookieParser = require("cookie-parser");
//Authentication
const Authenticate = require("./middleware/auth");
//Cors
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//other middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// Static Middleware
app.use(express.static(path.join(__dirname, "public")));
//Multer middleware
var { upload1, upload2, getselectedImage } = require("./middleware/multer");
const multer = require("multer");
//node file system module
const fs = require("fs");

//signup post request
app.post("/signup", (req, res) => {
  console.log(req.body);
  const { userName, email, password } = req.body;
  const newUser = new User({
    userName: userName,
    email: email,
    password: password,
  });
  newUser.save(function (err) {
    if (err) {
      if (err.name === "MongoServerError" && err.code === 11000) {
        console.log(err);
        // Duplicate username
        return res
          .status(500)
          .send({ success: false, message: "User already exist!" });
      }
      console.log(err);
      return res.status(500).send(err);
    } else {
      return res.status(200).send("User is registered successfully");
    }
  });
});

//Login Post request
app.post("/Login", async (req, res) => {
  try {
    let token;
    const ExistUser = await User.findOne({ email: req.body.email });
    if (ExistUser && ExistUser.password == req.body.password) {
      token = await ExistUser.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        sameSite: "lax",
        httpOnly: true,
      });
      res.status(200).send("User is Logged in successfully");
    } else {
      res.status(500).send("Invalid Email or Password");
    }
  } catch (err) {
    console.log(err);
  }
});

// get userdata with all posts
app.get("/Profile", Authenticate, async (req, res) => {
  await User.findById(req.user._id)
    .populate("posts following followers")
    .exec((err, docs) => {
      if (err) {
        console.log(err);
      } else {
        res.send(docs);
      }
    });
});

//for uploading new profile image and deleting prev
app.post("/Profile", Authenticate, async function (req, res) {
  const prev_profile = req.user.profile;
  console.log(prev_profile);

  await upload2(req, res, async function (err) {
    const selectedImage = getselectedImage();
    console.log("new " + selectedImage);
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    } else {
      await User.findByIdAndUpdate(req.user._id, {
        $set: { profile: selectedImage },
        async function(err, docs) {
          if (err) {
            console.log(err);
          }
        },
      });
    }
  });
  if (prev_profile !== "default-avatar.jpg") {
    fs.unlinkSync(`./public/ProfileImages/${prev_profile}`, function (err) {
      if (err) console.log(err);
      console.log("File deleted!");
      res.send("success");
    });
    res.send();
  }
});

//Post post request
app.post("/selectImage", Authenticate, function (req, res) {
  upload1(req, res, function (err) {
    //all that we send through formdata can be obtained here through req.body.something
    const selectedImage = getselectedImage();
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    } else {
      const newpost = new Post({
        image: selectedImage,
        description: req.body.caption,
        timeStamp: new Date(),
        user: req.user._id,
      });

      newpost.save(async function (err, docs) {
        if (err) {
          return res.status(500).send(err);
        } else {
          await User.findByIdAndUpdate(req.user._id, {
            $push: { posts: docs._id },
          });
          return res.status(200).send("registered successfully");
        }
      });
    }
  });
});

app.get("/fetchpost", Authenticate, async (req, res) => {
  const following_array = req.user.following;
  following_array.push(req.user._id);
  await Post.find({ user: { $in: following_array } })
    .sort({ timeStamp: -1 })
    .populate("user")
    .exec(function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send(docs);
      }
    });
});

app.get("/suggestions", Authenticate, function (req, res) {
  User.find(
    { _id: { $ne: req.user._id }, followers: { $nin: req.user._id } },
    null,
    { limit: 5 },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send(docs);
      }
    }
  );
});

app.post("/following", Authenticate, function (req, res) {
  User.findByIdAndUpdate(
    req.user._id,
    { $addToSet: { following: req.body._id } },
    function (err) {
      if (err) {
        console.log(err);
      } else {
        User.findByIdAndUpdate(
          req.body._id,
          { $addToSet: { followers: req.user._id } },
          function (err) {
            if (err) {
              console.log(err);
            } else {
              return res.send("Succesfully posted");
            }
          }
        );
      }
    }
  );
});

//to store comment in database
app.post("/comment", Authenticate, function (req, res) {
  const user = req.user._id;
  const { postid, comment } = req.body;

  Post.findByIdAndUpdate(
    postid,
    {
      $push: { Comments: { comment: comment, user: user } },
    },
    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.send();
      }
    }
  );
});

//to store likes in database
app.post("/like", Authenticate, function (req, res) {
  console.log(req.body);
  const { postid, value } = req.body;
  console.log(req.user.userName);
  Post.findByIdAndUpdate(
    postid,
    { likes: { $inc: { count: value } } },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
      }
      res.send("success");
    }
  );
});

app.post("/getComments", Authenticate, async function (req, res) {
  await Post.findById(req.body._id)
    .sort({ timeStamp: -1 })
    .populate("user Comments.user")
    .exec(function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
        res.send(docs);
      }
    });
});

//Port listening
app.listen(PORT, () => {
  console.log("App running on port 3001");
});
