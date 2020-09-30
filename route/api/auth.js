const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

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

// @route   POST api/auth
// @desc   Authentication user & get token
// @access Public

router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    // This exists check the password is exists
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // This is the method of sending error message
      return res.status(400).json({ errors: errors.array() });
    }
    // Destructuring the req.body element
    const { email, password } = req.body;
    try {
      // See if user exists
      // look the destructuring email and findOne email 2 value name are same that's why I didn't use email : email
      // let used for it might be changed
      let user = await User.findOne({ email });

      // if the user is not an user
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // password which is plain text user entered user.password we get it database encrypted password
      const isMatch = await bcrypt.compare(password, user.password);

      // This msg are used for security reason same
      // if not is match
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: user.id, // This is mongoose id not mongodb _id
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 }, // This use for token change hours
        (err, token) => {
          // This is throw the err
          if (err) throw err;
          // This send the token client site
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
