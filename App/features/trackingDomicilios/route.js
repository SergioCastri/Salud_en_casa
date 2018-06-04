const Router = require('express').Router

const utilTracking = require('./util')

let router = new Router()

router.route('/trackingDomicilios')
  .get((...args) => {
    utilTracking.getAllTracking(...args)
  })

  router.route('/trackingOneDomicilios')
  .post((...args) => {
    utilTracking.getOnlyTracking(...args)
  })

  router.route('/trackingDomicilios')
  .post((...args) => {
    utilTracking.saveTracking(...args)
})


module.exports = router