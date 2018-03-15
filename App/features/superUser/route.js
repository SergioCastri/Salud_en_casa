const Router = require('express').Router

const utilSuperUser = require('./util')

let router = new Router()

router.route('/superUser')
  .post((...args) => {
    utilSuperUser.saveSuperUser(...args)
  })

  router.route('/superUser')
  .get((...args) => {
    utilSuperUser.getAllSuperUser(...args)
})

module.exports = router