const Router = require('express').Router

const utilClient = require('./util')

let router = new Router()

router.route('/client')
  .post((...args) => {
    utilClient.saveClient(...args)
  })

  router.route('/client')
  .get((...args) => {
    utilClient.getAllClients(...args)
})

module.exports = router