const Router = require('express').Router

const utilUser = require('./util')

let router = new Router()

router.route('/messengerUser')
  .post((...args) => {
    utilUser.saveMessengerUser(...args)
  })

  router.route('/adminUser')
  .post((...args) => {
    utilUser.saveAdminUser(...args)
  })

  router.route('/adminUserSingIn')
  .post((...args) => {
    utilUser.singInAdmin(...args)
  })

  router.route('/messengerUserSingIn')
  .post((...args) => {
    utilUser.singInMessenger(...args)
  })

  
  router.route('/changePassAdmin')
  .post((...args) => {
    utilUser.changePassAdmin(...args)
  })

  router.route('/changePassMessenger')
  .post((...args) => {
    utilUser.changePassMessenger(...args)
  })


  router.route('/adminUser')
  .get((...args) => {
    utilUser.getAllUserAdmin(...args)
})

router.route('/messengerUser')
.get((...args) => {
  utilUser.getAllUserMessenger(...args)
})


module.exports = router