const Router = require('express')
const router = new Router()

router.post('/registration',)
router.post('/login',)
router.get('/auth', (req, res) => {
    res.json({message: "ALL WORKING"})
})
router.get('/:id',)
router.delete('/',)

module.exports = router