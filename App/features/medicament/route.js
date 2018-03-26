const Router = require('express').Router

const utilMedicament = require('./util')

let router = new Router()

router.route('/medicament')
  .post((...args) => {
    utilMedicament.saveMedicament(...args)
  })

  router.route('/medicamentByCategory')
  .post((...args) => {
    utilMedicament.getMedicamentByCategory(...args)
  })

  router.route('/medicamentByName')
  .post((...args) => {
    utilMedicament.getMedicamentByName(...args)
  })

  router.route('/medicament')
  .get((...args) => {
    utilMedicament.getAllMedicament(...args)
})

module.exports = router