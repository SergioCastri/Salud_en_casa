
const Router = require('express').Router

let roterSupremeUser = require('./features/supremeUser/route')
let routeSuperUser=  require('./features/superUser/route')  
let routeUser = require('./features/user/route')  
let routeClient = require('./features/client/route')  
let routeMedicament = require('./features/medicament/route')  
let routePurchase = require('./features/purchase/route')  
let routeService = require('./features/service/route') 
let routeRecord = require('./features/record/route')

let router = new Router()

router.use('/v1', roterSupremeUser)
router.use('/v1', routeSuperUser)
router.use('/v1', routeUser)
router.use('/v1', routeClient)
router.use('/v1', routeMedicament)
router.use('/v1', routePurchase)
router.use('/v1', routeService)
router.use('/v1', routeRecord)

module.exports = router