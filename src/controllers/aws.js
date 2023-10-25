const { Router } = require('express')
const awsService = require('../services/awsService')
const router = Router()

router.get('/aws', async (req, res) => {
    try {
        const result = await awsService.listBuckets()
        res.status(200).json({ success: true, result })
    } catch (error) {
        return res
            .status(400)
            .json({ error: 'Unexpected Error', stack: error.stack })
    }
})

module.exports = router
