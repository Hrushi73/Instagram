const multer = require("multer");
const path = require("path");

var selectedImage = "";
//multer instance
var storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/inProcessImages");
  },
  filename: function (req, file, cb) {
    selectedImage = Date.now() + file.originalname;
    cb(null, selectedImage);
  },
});
//upload instance
var upload1 = multer({
  storage: storage1,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return cb(new Error("Only images are allowed"));
    } else {
      cb(null, true);
    }
  },
}).single("file");

//Profile
var storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/ProfileImages");
  },
  filename: function (req, file, cb) {
    selectedImage = Date.now() + " " + file.originalname;
    cb(null, selectedImage);
  },
});
//upload instance
var upload2 = multer({
  storage: storage2,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return cb(new Error("Only images are allowed"));
    } else {
      cb(null, true);
    }
  },
}).single("file");

const getselectedImage = () => {
  return selectedImage;
};

module.exports = { upload1, upload2, getselectedImage };
