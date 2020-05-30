const bcrypt = require("bcryptjs");
const router = require("express").Router();
const usersDB = require("../api/users/userModel");
const jwt = require("jsonwebtoken")

router.post("/register", (req, res) => {
  const userInfo = req.body;

  //hash passwords
  const ROUNDS = process.env.HASHING_ROUNDS || 8;
  const hash = bcrypt.hashSync(userInfo.password, ROUNDS);

   userInfo.password = hash;

  usersDB
    .add(userInfo)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res
        .status(401)
        .json({
          errorMessage: `${error} your registeration failed! Something went wrong with your registration`
        });
    });
});



router.post("/login", (req, res) => {
  const { username, password } = req.body;

  usersDB
    .findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.hashSync(password, user.password)) {
        const token = generateToken(user);//get a token

        res.status(200).json({
          message: `welcome ${user.username}`,
          id: user.id,
          token,//send token
        });
      } else {
        res.status(401).json({ message: "invaild credentials" });
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: `${error}` });
    });
});

function generateToken(user) {
    const payload = {
        username: user.username
    }

    // const secret = process.env.JWT_SECRET || "is it safe"
    const options = {
        expiresIn: "1h",
    }
    return jwt.sign(payload, options)
}


module.exports = router;