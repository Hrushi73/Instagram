const jwt = require("jsonwebtoken");
const User = require("../Models/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, "IAMGOODBOY");

    const user = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error("User not found");
    }

    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized:No token provided");
    console.log(error);
  }
};

module.exports = Authenticate;
