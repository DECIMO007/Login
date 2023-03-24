const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const session = require('express-session');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const db = pgp('postgres://postgres:8943@localhost:5432/mydatabase');


router.post('/login', (req, res) => {
  const { name, password } = req.body;
  db.none('INSERT INTO users (name, password) VALUES ($1, $2)', [name, password])
    .then(() => {
      if (name === 'Admin' && password === '1234') {
        res.status(200).json({ status: 'success' });
      } else {
        res.status(401).json({ status: 'failure' });
      }
    })
    .catch((error) => {
      res.json({ status: false});
    });
});


module.exports = router;
