const Router = require('express').Router

const utilMedicaments = require('./util')

let router = new Router()

router.route('/medicament')
  .post((...args) => {
    utilMedicaments.saveMedicament(...args)
  })

  router.route('/medicamentByCategory')
  .post((...args) => {
    utilMedicaments.getMedicamentByCategory(...args)
  })

  router.route('/medicamentByName')
  .post((...args) => {
    utilMedicaments.getMedicamentByName(...args)
  })

  router.route('/medicament')
  .get((...args) => {
    utilMedicaments.getAllMedicament(...args)
})

router.route('/medicament/:medicament')
  .delete((...args) => {
    utilMedicaments.deleteMedicament(...args)
 })

 router.route('/updateMedicament')
  .post((...args) => {
    utilMedicaments.updateMedicament(...args)
 })

module.exports = router