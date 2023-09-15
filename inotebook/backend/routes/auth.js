const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const JWT_SECRET = "goodygoody";

router.post(
  "/createuser/", 
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });

        //    let salt = await bcrypt.genSalt(10)
      }
      let secpass = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
      );
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });

      const data = {
            id: user.id,
      };

      const jwtData = jwt.sign(
        data,

        JWT_SECRET
      );
      console.log(jwtData);
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: "Some error occured" });
    }
  }
);
module.exports = router;
