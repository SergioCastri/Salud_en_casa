const Router = require('express').Router

const utilUser = require('./util')

let router = new Router()

router.route('/user')
  .post((...args) => {
    utilUser.saveUser(...args)
  })

  router.route('/user')
  .get((...args) => {
    utilUser.getAllUser(...args)
})

module.exports = router