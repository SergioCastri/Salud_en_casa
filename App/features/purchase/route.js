const Router = require('express').Router

const utilPurchase = require('./util')

let router = new Router()

router.route('/purchase')
  .post((...args) => {
    utilPurchase.savePurchase(...args)
  })

  router.route('/purchase')
  .get((...args) => {
    utilPurchase.getAllPurchase(...args)
})

module.exports = router