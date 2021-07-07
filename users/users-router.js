const express = require('express');
const bcrypt = require('bcryptjs');

const users = require('./users-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error fetching the list of users." })
    });
});

router.post('/register', (req, res) => {
  let newUser = req.body;

  const hash = bcrypt.hashSync(newUser.password, 8);

  users.add({...newUser, password: hash})
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error while adding this user." })
    });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` })
      } else {
        res.status(401).json({ message: "Sorry, but you don't have access to this content." })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})



module.exports = router;
