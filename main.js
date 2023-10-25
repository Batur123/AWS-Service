require('dotenv').config()

const express = require('express')
const app = express()
const { port } = require('./src/configs/index')

const awsController = require('./src/controllers/aws')
app.use((error, req, res, next) => {
    if (error) {
        res.status(404).json({ error: 'Unexpected Error' })
    } else {
        next()
    }
})

app.use(awsController)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

process.on('uncaughtException', function (err) {
    console.error(err)
})
