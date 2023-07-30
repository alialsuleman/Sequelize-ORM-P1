const express = require('express')
const router = express.Router()
const { Tags, Posts } = require('../models')

// on routes that end in /tags
router
  .route('/tags')
  // find all tags
  .get((req, res) => {
    Tags.findAll().then(tags => {
      res.json(tags)
    })
  })
  // create a new tag
  .post((req, res) => {
    let body = req.body
    Tags.create(body).then(tag => {
      res.json(tag)
    })
      .catch((e) => res.json(e.message))
  })

// find posts belonging to a specific tag
router
  .route('/tags/:tagid/posts')
  .get((req, res) => {
    Tags.findAll({
      where: { id: req.params.tagid },
      include: [Posts]
    })
      .then(result => {
        res.json(result)
      })
  })

module.exports = router