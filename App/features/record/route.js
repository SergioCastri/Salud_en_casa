const Router = require('express').Router

const utilRecord = require('./util')

let router = new Router()

router.route('/record')
  .get((...args) => {
    utilRecord.getAllRecords(...args)
  })


module.exports = router