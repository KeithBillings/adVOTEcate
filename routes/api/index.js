const { body, validationResult } = require("express-validator");

const {MongoError} = require("mongodb");

const router = require("express").Router();

const db = require("../../db");

router.post("/users", [
  body("name").trim().not().isEmpty().withMessage("Please enter a name"),
  body("password").trim().isLength({min:6}).withMessage("Please enter a password"),
  body("address").trim().notEmpty().withMessage("Please enter a password"),
  body("email").trim().isEmail().normalizeEmail().withMessage("Please enter an email"),
  body("phone").trim().isMobilePhone().withMessage("Please enter a phone number"),
], async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, password, address, email, phone} = req.body;
  try {
  const newUser = await db.User.create({ name, password, address, email, phone});
  // session mamagement
  res.status(201).json(newUser);
  } catch (err) {
    if (err instanceof MongoError) {
      if (err.code === 11000) {
        res.status(400).json({errors: [{msg: "Email already in use"}]});
      }
      console.log(err);
    }
      res.status(500).end();
  }
})

router.post("/users/signin", [
  body("email").trim().isEmail().normalizeEmail().withMessage("Please enter an email"),
  body("password").trim().notEmpty().withMessage("Please enter a password"),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ email });
    if (!user || !user.comparePassword(password)) {
      return res.status(401).end();
    }
    // session mamagement
    res.status(200).json(user);
  } catch (err) {
    res.status(500).end();
  }
})

module.exports = router;