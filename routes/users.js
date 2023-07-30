const express = require("express");
const router = express.Router();
const { Users, Posts } = require("../models");

router
  .route('/users')
  .get((req, res) => {
    Users.findAll().then((users) => {
      res.json(users);
    });
  })
  .post((req, res) => {
    let body = req.body;
    Users
      .create(body)
      .then((user) => {
        res.json(user);
      })
      .catch((e) => res.json(e.message));
  });

router.route('users/:userId/posts').get((req, res) => {
  Users
    .findAll({
      where: { id: req.params },// userId ;
      include: [Posts],
    })
    .then((result) => {
      res.json(result);
    });
});
module.exports = router