const Router = require('express')
const router = new Router()
const chatController = require('../controllers/chatsController')

router.post('/', chatController.insert)
router.get('/', chatController.getById)
router.get('/:id', chatController.getAll)

module.exports = router