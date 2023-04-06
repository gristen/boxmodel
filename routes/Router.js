const Router = require('express')
const bodyParser = require('body-parser')



const router = new Router()
const controller = require("../controllers/boxsController")
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/registerBox',urlencodedParser,controller.addBox)
router.get('/getAllBoxs',controller.getAllBoxs)
router.put('/updateBox',controller.updateBox)
router.delete('/delete/:id',controller.deleteBox)
router.get('/search/:param/:value', controller.findBox);

module.exports = router