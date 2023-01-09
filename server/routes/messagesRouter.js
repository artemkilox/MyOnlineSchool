const Router = require('express')
const router = new Router()
const messageController = require('../controllers/messagesController')

router.post('/', messageController.insert)
router.post('/', messageController.update)
router.get('/', messageController.getByStudId)
router.get('/', messageController.getByChatId)
router.get('/', messageController.getByTeachId)
router.get('/', messageController.getByManagerId)
router.get('/', messageController.getAll)

module.exports = router