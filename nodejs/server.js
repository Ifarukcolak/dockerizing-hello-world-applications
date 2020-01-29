const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello from Nodejs')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Hello app is listening on port ${PORT}!`)
})  