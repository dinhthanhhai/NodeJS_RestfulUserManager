const express = require('express')//import thu vien express
const app = express()//tao app de su dung tat ca ham cua express
const port = 3000//tao cong

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send(`I'm Hai`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})