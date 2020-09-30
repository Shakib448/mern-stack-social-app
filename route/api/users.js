const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs"); // # password
const { check, validationResult } = require("express-validator");
// Model
const User = require("../../models/User");
// @route   POST api/users
// @desc   Register user
// @access Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // This is the method of sending error message
      return res.status(400).json({ errors: errors.array() });
    }
    // Destructuring the req.body element
    const { name, email, password } = req.body;
    try {
      // See if user exists
      // look the destructuring email and findOne email 2 value name are same that's why I didn't use email : email
      // let used for it might be changed
      let user = await User.findOne({ email });

      // if the user is not found
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      // Get user gravatar is about email address

      const avatar = gravatar.url(email, {
        s: "200", // size
        r: "pg", // rating
        d: "mm", // default
      });

      // new user information
      user = new User({
        name,
        email,
        avatar,
        password,
      });
      // Encrypt the password  using decrypt
      const salt = await bcrypt.genSalt(10);
      // set new user password
      user.password = await bcrypt.hash(password, salt);
      // save database
      await user.save();
      // Return the jsonwebtoken
      res.send("User registered");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
