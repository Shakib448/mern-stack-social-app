const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
// @route   GET api/auth
// @desc   TEST route
// @access Public

router.get("/", auth, async (req, res) => {
  try {
    // This -password is not check the token password validation
    const user = await User.findById(req.user.id).select("-password");
    // This specify the data specify the user which is matched their req.user.id
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server-Error");
  }
});

module.exports = router;
