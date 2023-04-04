const express = require("express");
const bcrypt = require("bcryptjs"); // Encryption of password
const jwt = require("jsonwebtoken"); // User Authentication token

const router = express.Router();

router.post("/new_user", [], async (req, res) => {
  try {
    // returns a promise that is resolved by async/await approach
    let success;
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      success = false;
      return res.status(400).json({
        success,
        error: "Sorry a user with same email already exists",
      });
    }

    //Returns Promise
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt);

    //Creating a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securePassword,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authToken });

    // res.json({"Successfully":`Merged ${user}`});
  } catch (err) {
    //Catching the internal error
    console.error(err.message);
    res.status(500).send("Some error occurred");
  }
});
router.post("/login", [], async (req, res) => {
  const { email, password } = req.body;
  try {
    // Finds user's email
    let user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ errors: "Please enter correct credentials." });
    }
    let success;
    //Compares password with the entered password
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      res
        .status(400)
        .json({ success, errors: "Please enter correct credentials." });
      success = false;
    }

    // Here we took id as "reference signature" of token
    const payLoad = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(payLoad, JWT_SECRET);
    success = true;
    res.json({ success, authToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
