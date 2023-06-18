import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebroute from './route/web'
import connection from './configs/connectDB'
import initAPIroute from './route/api'
require('dotenv').config();
const app = express()//tao app de su dung tat ca ham cua express
const port = process.env.PORT || 3000;//neu process.env.PORT: undefined thi dung cong 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

initWebroute(app);

initAPIroute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})