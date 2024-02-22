/** @format */
const User = require("../modals/usermodal");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      success: false,
      msg: "Missing username or password",
    });
  }
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.json({
        success: false,
        msg: "User not found",
      });
    }

    const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESSTOKEN);
    const userLogin = await User.findById(user._id);

    return res.json({
      success: true,
      msg: "Login success!",
      accessToken,
      userLogin,
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: error.message,
      userLogin,
    });
  }
};

const SignUp = async (req, res) => {
  const { username, password, name } = req.body;
  if (!username || !password || !name) {
    return res.json({
      success: false,
      msg: "Missing username or password or name",
    });
  }

  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.json({
        success: false,
        msg: "Username already",
      });
    }
    const newUser = new User({ name, username, password });
    await newUser.save();

    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESSTOKEN
    );

    return res.json({
      success: true,
      msg: "Sign up successfull!",
      accessToken,
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = { Login, SignUp };
