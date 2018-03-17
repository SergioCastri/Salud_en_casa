const Router = require('express').Router

const utilSupremeUser = require('./util')

let router = new Router()

router.route('/supremeUser')
  .post((...args) => {
    utilSupremeUser.saveSupremeUser(...args)
  })


  router.route('/supremeUserSingIn')
  .post((...args) => {
    utilSupremeUser.singIn(...args)
  })


  router.route('/supremeUser')
  .get((...args) => {
    utilSupremeUser.getAllSupremeUser(...args)
})

module.exports = router