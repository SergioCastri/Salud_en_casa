const Router = require('express').Router

const utilClient = require('./util')

let router = new Router()

router.route('/client')
  .post((...args) => {
    utilClient.registerClient(...args)
  })

  router.route('/clientSingIn')
  .post((...args) => {
    utilClient.singIn(...args)
  })

  router.route('/changePasswordClient')
  .post((...args) => {
    utilClient.changePass(...args)
  })
  router.route('/client')
  .get((...args) => {
    utilClient.getAllClients(...args)
})

module.exports = router