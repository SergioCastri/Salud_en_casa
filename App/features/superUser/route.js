const Router = require('express').Router

const utilSuperUser = require('./util')

let router = new Router()

router.route('/super')
  .post((...args) => {
    utilSuperUser.saveSuperUser(...args)
  })


  router.route('/superUserSingIn')
  .post((...args) => {
    utilSuperUser.singIn(...args)
  })


  router.route('/superUser')
  .get((...args) => {
    utilSuperUser.getAllSuperUser(...args)
})

module.exports = router