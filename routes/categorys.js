const express = require('express')
const router = express.Router()
const { Categorys, Posts } = require('../models')

// on routes that end in /categories
router
  .route('/categories')
  // find all categories
  .get((req, res) => {
    Categorys.findAll().then(categories => {
      res.json(categories)
    })
  })
  // create a new category
  .post((req, res) => {
    let body = req.body
    Categorys.create(body).then(category => {
      res.json(category)
    })
      .catch((e) => res.json(e.message))
  })

// find posts belonging to a specific category
router
  .route('/categories/:categoryid/posts')
  .get((req, res) => {
    Categorys.findAll({
      where: { id: req.params.categoryid },
      include: [
        {model: Post, as: "articles"}
      ]
    })
      .then(result => {
        res.json(result)
      })
  })

module.exports = router