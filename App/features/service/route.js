const Router = require('express').Router

const utilService = require('./util')

let router = new Router()

router.route('/publicateServices')
  .post((...args) => {
    utilService.publicateService(...args)
  })

  router.route('/attendedServices')
  .post((...args) => {
    utilService.attendedService(...args)
})

router.route('/attendedServices')
.get((...args) => {
  utilService.getAllServicesAttended(...args)
})

router.route('/publicateServices')
.get((...args) => {
  utilService.getAllServicesPublicate(...args)
})

module.exports = router