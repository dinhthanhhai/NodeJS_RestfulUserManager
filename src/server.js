import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express()//tao app de su dung tat ca ham cua express
const port = 3000//tao cong

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send(`Dinh Thanh Hai`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})