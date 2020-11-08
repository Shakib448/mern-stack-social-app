const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Post = require("../../models/Posts");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   POST api/Post
// @desc   Create a post
// @access Private

router.post(
  "/",
  [auth, [check("text", "Text is required").not().notEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    // If error is not empty
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        text: req.body.text,
        name: user.user,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
